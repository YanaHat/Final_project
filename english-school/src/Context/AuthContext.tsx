import { createContext, useState, useEffect, type ReactNode } from "react";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import supabase from "../supabaseClient";
import { createStudent, StudentExistsError, type StudentProfile } from "../Services/students";

type User = {
  id: string;
  email: string;
} | null;

export type RegisterData = StudentProfile & {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<boolean>;
  logout: () => Promise<void>;
  loading: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const toUser = (user: SupabaseUser | null | undefined): User =>
  user ? { id: user.id, email: user.email ?? "" } : null;

const translateAuthError = (message: string): string => {
  if (message.includes("Invalid login credentials")) return "Неверный email или пароль";
  if (message.includes("Email not confirmed")) return "Подтвердите email по ссылке из письма";
  if (message.includes("already registered")) return new StudentExistsError().message;
  if (message.includes("Password should be")) return "Пароль слишком простой или короткий";
  return "Что-то пошло не так. Попробуйте ещё раз.";
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(toUser(data.session?.user));
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(toUser(session?.user));
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      throw new Error(translateAuthError(error.message));
    }
  };

  const register = async ({ email, password, ...profile }: RegisterData) => {
    const normalizedEmail = email.trim().toLowerCase();

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
    });

    if (error) {
      throw new Error(translateAuthError(error.message));
    }

    if (!data.user || data.user.identities?.length === 0) {
      throw new StudentExistsError();
    }

    await createStudent({ ...profile, id: data.user.id, email: normalizedEmail });

    return !data.session;
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

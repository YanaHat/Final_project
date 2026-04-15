import { createContext, useState, useEffect, type ReactNode } from "react";

// Definicja typu dla użytkownika - może posiadać email lub być nullem (niezalogowany).
type User = {
  email: string;
} | null;

// Definicja interfejsu danych udostępnianych przez kontekst autoryzacji.
type AuthContextType = {
  user: User;           // Obiekt zalogowanego użytkownika
  login: (email: string) => void; // Funkcja do logowania
  logout: () => void;   // Funkcja do wylogowania
  loading: boolean;     // Flaga informująca, czy trwa sprawdzanie sesji
};

// Inicjalizacja kontekstu autoryzacji.
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Stan przechowujący dane użytkownika.
  const [user, setUser] = useState<User>(null);
  
  // Stan ładowania zapobiega "mignięciu" strony logowania podczas sprawdzania localStorage.
  const [loading, setLoading] = useState(true);

  // Sprawdzanie istniejącej sesji przy uruchomieniu aplikacji.
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    // Jeśli w pamięci przeglądarki istnieje zapisany użytkownik, przywracamy go do stanu.
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Deserializacja danych z formatu JSON
    }

    setLoading(false); // Po sprawdzeniu sesji wyłączamy stan ładowania
  }, []);

  // Logika logowania: zapisuje dane w localStorage i aktualizuje stan aplikacji.
  const login = (email: string) => {
    const userData = { email };
    // Konwertujemy obiekt na string, aby zapisać go w localStorage.
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Logika wylogowania: czyści pamięć przeglądarki i resetuje stan użytkownika.
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    // Udostępnienie funkcji i danych autoryzacyjnych do całej struktury komponentów.
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
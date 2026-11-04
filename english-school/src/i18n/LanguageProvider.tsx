import { useState, useEffect, type ReactNode } from "react";
import { LanguageContext, type Language } from "./LanguageContext";
import type { ErrorKey } from "./ru";
import ru from "./ru";
import pl from "./pl";

const translations = { ru, pl };
const STORAGE_KEY = "language";

const getSavedLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "pl" || saved === "ru" ? saved : "ru";
  } catch {
    return "ru";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {

  // Читаем язык сразу при создании состояния, чтобы не было «мигания» русского текста
  const [language, setLanguage] = useState<Language>(getSavedLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // localStorage может быть недоступен (приватный режим) — просто не сохраняем
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "pl" : "ru"));
  };

  const t = translations[language];
  const tError = (key: string) => t.errors[key as ErrorKey] ?? key;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, tError }}>
      {children}
    </LanguageContext.Provider>
  );
};

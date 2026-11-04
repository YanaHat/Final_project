import { createContext, useContext } from "react";
import ru, { type ErrorKey, type Translations } from "./ru";

export type Language = "ru" | "pl";

type LanguageContextType = {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  // Переводит ключ ошибки (из Yup-схемы или сервиса); неизвестный текст возвращает как есть
  tError: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "ru",
  t: ru,
  toggleLanguage: () => {},
  tError: (key) => ru.errors[key as ErrorKey] ?? key,
});

export const useLanguage = () => useContext(LanguageContext);

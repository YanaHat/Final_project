import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Definicja interfejsu (TypeScript), która określa, jakie dane będą dostępne w kontekście.
// 'theme' to aktualny stan (string), a 'toggleTheme' to funkcja do jego zmiany.
interface AppContextType {
  theme: string;
  toggleTheme: () => void;
}

// Tworzenie kontekstu. Początkowo ma wartość null, 
// dopóki nie zostanie zainicjalizowany w AppProvider.
export const AppContext = createContext<AppContextType | null>(null);

// Komponent Provider, który "owija" całą aplikację, dając jej dostęp do danych.
export const AppProvider = ({ children }: { children: ReactNode }) => {
  // Stan przechowujący aktualny motyw (domyślnie "light").
  const [theme, setTheme] = useState("light");

  // Funkcja zmieniająca motyw na przeciwny. 
  // Wykorzystuje poprzedni stan (prev), aby bezpiecznie przełączyć light <-> dark.
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Pierwszy useEffect (uruchamiany tylko raz przy starcie aplikacji):
  // Sprawdza, czy w pamięci przeglądarki (localStorage) jest już zapisany motyw.
  // Dzięki temu po odświeżeniu strony użytkownik nie musi ponownie wybierać trybu ciemnego.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Drugi useEffect (uruchamiany przy każdej zmianie stanu 'theme'):
  // 1. Przypisuje klasę CSS (light/dark) bezpośrednio do elementu <body>.
  //    Pozwala to na globalną zmianę kolorów tła i czcionek w plikach CSS.
  // 2. Zapisuje aktualny wybór w pamięci przeglądarki (localStorage).
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // Udostępnienie stanu i funkcji wszystkim komponentom potomnym (children).
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
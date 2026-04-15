import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import { AuthProvider } from "./Context/AuthContext";
import App from "./App";
import "./index.css";

// createRoot inicjalizuje aplikację w elemencie DOM o id "root".
// Wykrzyknik (!) informuje TypeScript, że element na pewno istnieje.
createRoot(document.getElementById("root")!).render(
  // StrictMode pomaga wykrywać potencjalne problemy w aplikacji podczas developmentu.
  <StrictMode>
    {/* BrowserRouter umożliwia działanie nawigacji (routingu) bez przeładowywania strony. */}
    <BrowserRouter>
      {/* AuthProvider dostarcza informacje o zalogowanym użytkowniku do całej aplikacji. */}
      <AuthProvider>
        {/* AppProvider zarządza globalnymi ustawieniami, takimi jak motyw (jasny/ciemny). */}
        <AppProvider>
          {/* Główny komponent aplikacji, który zawiera strukturę stron. */}
          <App />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
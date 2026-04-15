import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";
import { Routes, Route, useLocation } from "react-router-dom"; // Import narzędzi do nawigacji

// Import poszczególnych stron (widoków) aplikacji
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Apply from "./pages/Apply/Apply";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import ProtectedRoute from "../src/components/ProtectedRoute"; // Komponent strażnika dostępu

function App() {
  // Hook useLocation pozwala nam śledzić, na jakiej podstronie aktualnie znajduje się użytkownik.
  const location = useLocation();

  // Logika biznesowa: chcemy ukryć ikony społecznościowe na stronie kontaktów, 
  // ponieważ tam te informacje są już widoczne w treści strony.
  const hideSocial = location.pathname === "/contacts";

  return (
    <>
      {/* Header jest poza <Routes>, więc będzie widoczny na każdej podstronie. */}
      <Header />

      {/* Kontener Routes zarządza zmianą treści środkowej części strony bez odświeżania przeglądarki. */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        
        {/* Przykład chronionej trasy:
            Użytkownik nie może wejść na /apply, jeśli nie jest zalogowany. 
            ProtectedRoute sprawdza stan w AuthContext i ewentualnie przekierowuje do logowania. */}
        <Route
          path="/apply"
          element={
            <ProtectedRoute>
              <Apply />
            </ProtectedRoute>
          }
        />
        
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>

      {/* Renderowanie warunkowe: pokaż komponent Social tylko jeśli hideSocial jest fałszem. */}
      {!hideSocial && <Social />}

      {/* Footer, podobnie jak Header, towarzyszy użytkownikowi na każdej podstronie. */}
      <Footer />
    </>
  );
}

export default App;
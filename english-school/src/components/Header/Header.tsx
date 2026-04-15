import { useContext } from "react";
import { AppContext } from "../../Context/AppContext"; // Import kontekstu aplikacji (np. dla motywu)
import Navigation from "../Navigation/Navigation"; // Import zagnieżdżonego komponentu menu
import "./Header.css";

const Header = () => {
  // Wykorzystanie hooka useContext do pobrania danych z AppContext.
  // Dzięki temu nagłówek wie, czy użytkownik wybrał tryb jasny (light) czy ciemny (dark).
  const context = useContext(AppContext);

  return (
    // Użycie szablonu tekstowego (template literal) do dynamicznego przypisania klasy CSS.
    // Jeśli context.theme to "dark", klasa będzie wyglądać: "header dark".
    // Pozwala to na łatwą zmianę stylów całego nagłówka jednym przełącznikiem.
    <header className={`header ${context?.theme}`}>
      <div className="container header__wrapper">
        <div className="logo">
          <img src="/src/assets/images/logoIcon.png" alt="logo" />
          {/* Link typu 'mailto', który po kliknięciu automatycznie otwiera 
            program pocztowy użytkownika z wpisanym adresem szkoły. */}
          <a className="logo__mail" href="mailto:school@englishprime.pl"> school@englishprime.pl </a>
        </div>

        {/* Wywołanie komponentu Navigation, który zawiera listę linków (Home, Courses, itp.).
          Separacja logiki nagłówka od samej listy linków poprawia czytelność kodu. */}    
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

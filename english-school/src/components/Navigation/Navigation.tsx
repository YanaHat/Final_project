import { useState, useContext } from "react";
import { NavLink } from "react-router-dom"; // NavLink automatycznie dodaje klasę 'active' do aktywnego linku
import "./Navigation.css";
import { AuthContext } from "../../Context/AuthContext";

const Navigation = () => {
  // Pobranie danych o użytkowniku i funkcji wylogowania z kontekstu autoryzacji
  const auth = useContext(AuthContext);

  // Lokalny stan sterujący otwarciem/zamknięciem menu mobilnego (true = otwarte)
  const [isOpen, setIsOpen] = useState(false);

  // Pomocnicza funkcja do zamykania menu po kliknięciu w link (istotne na telefonach)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      {/* Przycisk typu Burger – zmienia swoją klasę CSS w zależności od stanu isOpen.
          onClick przełącza stan między true a false. */}
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <span></span> {/* Element graficzny burgera (paski) */}
      </button>

      {/* Lista linków. Klasa 'active' (sterowana CSS) wysuwa menu na urządzeniach mobilnych */}
      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
        
        {/* Renderowanie warunkowe: pokaż "Login" tylko jeśli użytkownik NIE jest zalogowany */}
        {!auth?.user && (
          <li><NavLink to="/login" onClick={closeMenu}>Логин</NavLink></li>
        )}

        {/* Renderowanie warunkowe: pokaż przycisk "Logout" tylko jeśli użytkownik JEST zalogowany */}
        {auth?.user && (
          <li><button onClick={auth.logout}>Logout</button></li>
        )}

        {/* Standardowe linki nawigacyjne dostępne dla każdego */}
        <li><NavLink to="/" onClick={closeMenu}>О школе</NavLink></li>
        <li><NavLink to="/courses" onClick={closeMenu}>Обучение</NavLink></li>
        <li><NavLink to="/faq" onClick={closeMenu}>Вопросы</NavLink></li>

        {/* Link chroniony: dostępny tylko dla zalogowanych uczniów/użytkowników */}
        {auth?.user && (
          <li><NavLink to="/apply" onClick={closeMenu}>Подать заявку</NavLink></li>
        )}

        <li><NavLink to="/contacts" onClick={closeMenu}>Контакты</NavLink></li>
        <li><NavLink to="/news" onClick={closeMenu}>Новости</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
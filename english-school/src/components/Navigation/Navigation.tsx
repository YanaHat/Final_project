import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../Context/AuthContext";


const Navigation = () => {
  const auth = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <span></span> 
      </button>

      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
        {!auth?.user && (
          <li><NavLink to="/login" onClick={closeMenu}>Логин</NavLink></li>
        )}
        {auth?.user && (
          <li><button onClick={auth.logout}>Logout</button></li>
        )}
        <li><NavLink to="/" onClick={closeMenu}>О школе</NavLink></li>
        <li><NavLink to="/courses" onClick={closeMenu}>Обучение</NavLink></li>
        <li><NavLink to="/faq" onClick={closeMenu}>Вопросы</NavLink></li>
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
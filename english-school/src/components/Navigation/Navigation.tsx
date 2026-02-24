import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <button
        className="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
        <li><NavLink to="/">О школе</NavLink></li>
        <li><NavLink to="/courses">Обучение</NavLink></li>
        <li><NavLink to="/faq">Вопросы</NavLink></li>
        <li><NavLink to="/apply">Подать заявку</NavLink></li>
        <li><NavLink to="/contacts">Контакты</NavLink></li>
        <li><NavLink to="/news">Новости</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;

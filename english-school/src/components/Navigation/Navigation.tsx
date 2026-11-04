import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../Context/AuthContext";
import { useLanguage } from "../../i18n/LanguageContext";


const Navigation = () => {
  const auth = useContext(AuthContext);
  const { t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <button
        className={`burger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.nav.menu}
      >
        <span></span> 
      </button>

      <ul className={`nav__list ${isOpen ? "active" : ""}`}>
        {!auth?.user && (
          <>
            <li><NavLink to="/login" onClick={closeMenu}>{t.nav.login}</NavLink></li>
            <li><NavLink to="/register" onClick={closeMenu}>{t.nav.register}</NavLink></li>
          </>
        )}
        {auth?.user && (
          <li><button onClick={auth.logout}>{t.nav.logout}</button></li>
        )}
        <li><NavLink to="/" onClick={closeMenu}>{t.nav.about}</NavLink></li>
        <li><NavLink to="/courses" onClick={closeMenu}>{t.nav.courses}</NavLink></li>
        <li><NavLink to="/faq" onClick={closeMenu}>{t.nav.faq}</NavLink></li>
        {auth?.user && (
          <li><NavLink to="/apply" onClick={closeMenu}>{t.nav.apply}</NavLink></li>
        )}
        <li><NavLink to="/contacts" onClick={closeMenu}>{t.nav.contacts}</NavLink></li>
        <li><NavLink to="/news" onClick={closeMenu}>{t.nav.news}</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
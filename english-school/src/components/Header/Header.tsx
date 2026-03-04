import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  const context = useContext(AppContext);

  return (
    <header className={`header ${context?.theme}`}>
      <div className="container header__wrapper">
        <div className="logo">
          <img src="/src/assets/images/logoIcon.png" alt="logo" />
          <a className="logo__mail" href="mailto:school@englishprime.pl"> school@englishprime.pl </a>
        </div>

        <Navigation />

        <button onClick={context?.toggleTheme}>
          Сменить тему
        </button>
      </div>
    </header>
  );
};

export default Header;

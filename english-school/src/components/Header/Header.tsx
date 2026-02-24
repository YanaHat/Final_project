import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="logo">English School</div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

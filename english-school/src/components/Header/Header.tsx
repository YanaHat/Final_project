import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="logo">
            <img src="/src/images/logoIcon.png" alt="logo" />
            <a href="https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Aschool%40englishprime.plschool@englishprime.pl">school@englishprime.pl</a>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

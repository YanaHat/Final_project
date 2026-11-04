import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <span>English Prime © 2024</span>
        <a href="https://englishprime.pl/politika/">{t.footer.privacy}</a>
      </div>
    </footer>
  );
};

export default Footer;

import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { SocialIcon } from 'react-social-icons';
import "./Social.css";
import { useLanguage } from "../../i18n/LanguageContext";

const Social = () => {
  const context = useContext(AppContext);
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className='social'>
      <button className="theme-toggle-btn" onClick={context?.toggleTheme} title={t.social.toggleTheme} aria-label={t.social.toggleTheme}>
        <img 
          src={context?.theme === 'light' 
            ? 'https://img.icons8.com/?size=100&id=9313&format=png&color=000000' 
            : 'https://img.icons8.com/?size=100&id=9313&format=png&color=ffffff'  
          } 
          alt={t.social.themeIcon} 
        />
      </button>

      {/* На кнопке — язык, на который переключимся */}
      <button
        className="theme-toggle-btn lang-toggle-btn"
        onClick={toggleLanguage}
        title={t.social.toggleLanguage}
        aria-label={t.social.toggleLanguage}
      >
        {language === "ru" ? "PL" : "RU"}
      </button>

      <SocialIcon url="https://t.me/englishprime_wroclaw" style={{ width: 35, height: 35 }} />
      <SocialIcon url="https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr" style={{ width: 35, height: 35 }} />
    </div>
  );
};

export default Social;
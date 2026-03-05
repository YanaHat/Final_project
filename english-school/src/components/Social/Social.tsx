import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { SocialIcon } from 'react-social-icons';
import "./Social.css";

const Social = () => {
  const context = useContext(AppContext);

  return (
    <div className='social'>
      <button className="theme-toggle-btn" onClick={context?.toggleTheme} title="Сменить тему">
        <img 
          src={context?.theme === 'light' 
            ? 'https://img.icons8.com/?size=100&id=9313&format=png&color=000000' 
            : 'https://img.icons8.com/?size=100&id=9313&format=png&color=ffffff'  
          } 
          alt="theme-icon" 
        />
      </button>

      <a href='https://t.me/englishprime_wroclaw' target="_blank" rel="noreferrer">
        <SocialIcon url="https://telegram.com" style={{ width: 35, height: 35 }} />
      </a>
      <a href='https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr' target="_blank" rel="noreferrer">
        <SocialIcon url="https://instagram.com" style={{ width: 35, height: 35 }} />
      </a>
    </div>
  );
};

export default Social;
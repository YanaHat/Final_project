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

      <SocialIcon url="https://t.me/englishprime_wroclaw" style={{ width: 35, height: 35 }} />
      <SocialIcon url="https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr" style={{ width: 35, height: 35 }} />
    </div>
  );
};

export default Social;
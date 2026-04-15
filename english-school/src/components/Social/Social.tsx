import { useContext } from "react";
import { AppContext } from "../../Context/AppContext"; // Import globalnego stanu aplikacji
import { SocialIcon } from 'react-social-icons'; // Zewnętrzna biblioteka do obsługi ikon social media
import "./Social.css";

const Social = () => {
  // Pobranie dostępu do kontekstu aplikacji (stan motywu i funkcja jego zmiany)
  const context = useContext(AppContext);

  return (
    <div className='social'>
      {/* Przycisk przełącznika motywu (Light/Dark Mode) */}
      <button 
        className="theme-toggle-btn" 
        onClick={context?.toggleTheme} // Po kliknięciu wywołuje funkcję zmieniającą motyw w AppContext
        title="Сменить тему" // Podpowiedź po najechaniu myszką
      >
        {/* Dynamiczna zmiana ikony w zależności od aktualnego motywu. 
            Jeśli motyw jest jasny (light), używamy czarnej ikony, 
            w przeciwnym razie (dark) używamy białej ikony dla lepszego kontrastu. */}
        <img 
          src={context?.theme === 'light' 
            ? 'https://img.icons8.com/?size=100&id=9313&format=png&color=000000' 
            : 'https://img.icons8.com/?size=100&id=9313&format=png&color=ffffff'  
          } 
          alt="theme-icon" 
        />
      </button>

      {/* Ikony mediów społecznościowych szkoły. 
        Komponent SocialIcon automatycznie rozpoznaje platformę po adresie URL i dopasowuje odpowiednie logo (Telegram, Instagram). */}
      <SocialIcon 
        url="https://t.me/englishprime_wroclaw" 
        style={{ width: 35, height: 35 }} 
      />
      
      <SocialIcon 
        url="https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr" 
        style={{ width: 35, height: 35 }} 
      />
    </div>
  );
};

export default Social;
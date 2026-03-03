import { SocialIcon } from 'react-social-icons'
import "./Social.css";

const Social = () => {
  return (
    <div className='social'>
        <a href='https://t.me/englishprime_wroclaw'><SocialIcon url="https://telegram.com" style={{ width: 35, height: 35 }} /></a>
        <a href='https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr'><SocialIcon url="https://instagram.com" style={{ width: 35, height: 35 }} /></a>
    </div>
  );
};

export default Social;
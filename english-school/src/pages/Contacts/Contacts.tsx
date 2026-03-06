import { SocialIcon } from 'react-social-icons'
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="contacts">
      <h1 className="contacts-title">Контакты</h1>

      <div className="contacts-content">
        <div className="contacts-info">
          <div className="contacts-info left">
            <p><strong>Telegram: </strong><SocialIcon url="https://t.me/englishprime_wroclaw" style={{ width: 35, height: 35 }} /></p>
            <p><strong>Instagram: </strong><SocialIcon url="https://www.instagram.com/englishprime.wroclaw?igsh=dWc0YXZ6Z2FuZzM3&utm_source=qr" style={{ width: 35, height: 35 }} /></p>
          </div>
          <div className="contacts-info right">
            <a href="mailto:englishprime.plschool@englishprime.pl"><strong>Email: </strong>school@englishprime.pl</a>
            <p><strong>Телефон: </strong> <a href='tel:+48 847 982 377'>+48 847 982 377</a></p>
          </div>          
        </div>

        <div className="contacts-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.5538271102443!2d17.031206716845578!3d51.111020394263406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27573f72281%3A0x3df45a77ef149573!2sRynek%2059%2C%2050-116%20Wroc%C5%82aw!5e0!3m2!1sru!2spl!4v1772544894162!5m2!1sru!2spl"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="hero-purple">
          <h2 className="hero-title">О школе English Prime</h2>
          
          <div className="hero-grid">
            <div className="hero-image">
              <img src="/src/assets/images/centrum.jpg" alt="Центр города" />
            </div>
            <div className="hero-text-card">
              <p>Хорошее расположение в самом сердце города</p>
              <p>Удобные классы с интерактивной доской</p>
            </div>

            <div className="hero-text-card">
              <p>Онлайн и оффлайн занятия</p>
              <p>Опытные преподаватели</p>
              <p>Уровни от A1 до C1</p>
            </div>
            <div className="hero-image">
              <img src="/src/assets/images/class.jpg" alt="Занятия" />
            </div>
          </div>
        </div>

        <div className="form-container">
          <div className="form-image">
            <img src="/src/assets/images/form.png" alt="Иллюстрация" />
          </div>
          <form className="contact-form">
            <h3>Записаться на пробное занятие</h3>
            <label>
              Имя*
              <input type="text" name="name" id="name" placeholder="Ваше имя" required autoComplete="name"/>
            </label>
            
            <label>
              Телефон*
              <input type="tel" name="phone" id="phone" placeholder="Ваш телефон" required autoComplete="tel"/>
            </label>
            
            <button type="submit" className="submit-btn">Отправить</button>
            <p className="privacy-text">*Нажимая кнопку «Отправить» Вы соглашаетесь с <a href="https://englishprime.pl/politika/">политикой конфиденциальности</a></p>
          </form>
        </div>

        <div className="certificates-section">
          <h3 className="certificates-title">Сертификаты преподавателей</h3>
          <div className="certificates-grid">
            <img src="/src/assets/images/cert1.png" alt="сертификат" />
            <img src="/src/assets/images/cert2.png" alt="сертификат" />
            <img src="/src/assets/images/cert3.png" alt="сертификат" />
            <img src="/src/assets/images/cert4.png" alt="сертификат" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
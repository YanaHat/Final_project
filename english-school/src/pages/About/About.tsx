import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about">
            <h1>Школа английского языка</h1>
            <div className="aboutInfo">
                <div className="infoCard">
                    <img src="" alt="" />
                    <p className="info">Хорошее расположение в самом сердце города. Удобные классы с интерактивной доской</p>
                </div>
                <div className="infoCard">
                    <img src="" alt="" />
                    <p className="info">Онлайн и оффлайн занятия. Опытные преподаватели. Уровни от A1 до C1.</p>
                </div>
            </div>
            <form className="form">
                <img src="/src/images/formImg.png" alt="" />
                <div>
                    <h2>Записаться на пробное занятие</h2>
                    <span>Имя</span>
                    <input type="text" />
                    <span>Телефон</span>
                    <input type="phone" />
                    <button>Записаться</button>
                    <p>Нажимая кнопу «Отправить» Вы соглашаетесь с политикой конфиденциальности</p>
                </div>
            </form>
            <div className="certificates">
                <span>Сертификаты преподавателей</span>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
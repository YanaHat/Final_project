import './About.css'
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik"
import * as Yup from "yup"
interface FormValues {
  name: string;
  phone: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Неверный формат телефона")
    .required("Введите телефон")
})

const About = () => {

const handleSubmit = (
  values: FormValues, 
  { resetForm }: FormikHelpers<FormValues>
) => {
  console.log("Данные формы:", values);
  alert("Заявка отправлена!");
  resetForm();
};

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

          <Formik
            initialValues={{
              name: "",
              phone: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >

            <Form className="contact-form">
              <h3>Записаться на пробное занятие</h3>
              <label>
                Имя*
                <Field
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                />
                <ErrorMessage name="name" component="div" className="error"/>
              </label>

              <label>
                Телефон*
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                />
                <ErrorMessage name="phone" component="div" className="error"/>
              </label>

              <button type="submit" className="submit-btn">
                Отправить
              </button>

              <p className="privacy-text">
                *Нажимая кнопку «Отправить» Вы соглашаетесь с
                <a href="https://englishprime.pl/politika/">
                  политикой конфиденциальности
                </a>
              </p>
            </Form>
          </Formik>
        </div>

        <div className="certificates-section">
          <h3 className="certificates-title">
            Сертификаты преподавателей
          </h3>

          <div className="certificates-grid">
            <img src="/src/assets/images/cert1.png" alt="сертификат" />
            <img src="/src/assets/images/cert2.png" alt="сертификат" />
            <img src="/src/assets/images/cert3.png" alt="сертификат" />
            <img src="/src/assets/images/cert4.png" alt="сертификат" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
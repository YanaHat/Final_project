import './About.css'
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik"
import * as Yup from "yup"

// Definicja typu dla wartości formularza - zapewnia bezpieczeństwo typów w TypeScript.
interface FormValues {
  name: string;
  phone: string;
}

// Schemat walidacji przy użyciu biblioteki Yup. 
// Określa reguły: name musi mieć min. 2 znaki, phone musi pasować do wzorca (Regex).
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "Неверный формат телефона")
    .required("Введите телефон")
})

const About = () => {

// Funkcja wywoływana po poprawnym wypełnieniu i zatwierdzeniu formularza.
const handleSubmit = (
  values: FormValues, 
  { resetForm }: FormikHelpers<FormValues>
) => {
  console.log("Данные формы:", values); // W prawdziwej aplikacji tutaj następuje wysyłka do API
  alert("Заявка отправлена!");
  resetForm(); // Czyszczenie pól formularza po sukcesie
};

  return (
    <section className="about-section">
      <div className="container">

        {/* Sekcja Hero: wizualna prezentacja szkoły z wykorzystaniem Grid Layout */}
        <div className="hero-purple">
          <h2 className="hero-title">О школе English Prime</h2>
          <div className="hero-grid">
            <div className="hero-image">
              <img src="/src/assets/images/centrum.jpg" alt="Centrum" />
            </div>
            <div className="hero-text-card">
              <p>Хорошее расположение в самом сердце города</p>
              <p>Удобные классы с интерактивной доской</p>
            </div>
            {/* ... reszta kart hero ... */}
          </div>
        </div>

        {/* Kontener formularza zintegrowany z Formik */}
        <div className="form-container">
          <div className="form-image">
            <img src="/src/assets/images/form.png" alt="Ilustracja" />
          </div>

          <Formik
            initialValues={{ name: "", phone: "" }} // Wartości początkowe pól
            validationSchema={validationSchema}     // Podpięcie reguł walidacji
            onSubmit={handleSubmit}                 // Podpięcie logiki wysyłki
          >
            <Form className="contact-form">
              <h3>Записаться на пробное занятие</h3>
              
              <label>
                Имя*
                {/* Field zastępuje standardowy <input> i automatycznie łączy się z Formikiem */}
                <Field type="text" name="name" placeholder="Ваше имя" />
                {/* ErrorMessage wyświetla błędy zdefiniowane w Yup, jeśli pole jest błędne */}
                <ErrorMessage name="name" component="div" className="error"/>
              </label>

              <label>
                Телефон*
                <Field type="tel" name="phone" placeholder="Ваш телефон" />
                <ErrorMessage name="phone" component="div" className="error"/>
              </label>

              <button type="submit" className="submit-btn">Отправить</button>
              
              <p className="privacy-text">
                *Klikając przycisk zgadzasz się z polityką prywatności.
              </p>
            </Form>
          </Formik>
        </div>

        {/* Sekcja dowodu społecznego (Social Proof): galeria certyfikatów lektorów */}
        <div className="certificates-section">
          <h3 className="certificates-title">Сертификаты преподавателей</h3>
          <div className="certificates-grid">
            <img src="/src/assets/images/cert1.png" alt="certyfikat" />
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
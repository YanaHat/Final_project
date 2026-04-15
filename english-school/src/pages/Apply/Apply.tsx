import { useState, useEffect } from "react";
import "./Apply.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Definicja schematu walidacji przy użyciu biblioteki Yup.
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),
  
  email: Yup.string()
    .email("Некорректный email") // Sprawdza czy string posiada strukturę adresu e-mail
    .required("Введите email"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "Только цифры"), // Dozwolone tylko cyfry, plus i spacja

  agreement: Yup.boolean()
    .oneOf([true], "Необходимо согласие") // Pole musi być zaznaczone (true), aby formularz przeszedł dalej
});

const Apply = () => {
  // Stan kontrolujący wyświetlanie ekranu z podziękowaniem po wysłaniu formularza
  const [submitted, setSubmitted] = useState(false);

  // Stan przechowujący wartości początkowe pól (z możliwością nadpisania z localStorage)
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    contactMethod: "",
    phone: "",
    username: "",
    message: "",
    agreement: false,
  });

  // useEffect pobierający dane z pamięci przeglądarki przy ładowaniu komponentu
  useEffect(() => {
    const savedData = localStorage.getItem("applicationData");
    if (savedData) {
      setInitialValues(JSON.parse(savedData));
    }
  }, []);

  // Widok "Success State" - renderowany, gdy submitted === true
  if (submitted) {
    return (
      <section className="apply">
        <h2>Спасибо! Ваша заявка отправлена.</h2>
      </section>
    );
  }

  return (
    <section className="apply">
      <h1 className="apply-title">Подать заявку</h1>
      <p className="apply-subtitle">* - обязательное поле!</p>

      <Formik
        initialValues={initialValues}
        // Pozwala Formikowi na zresetowanie pól, gdy initialValues zmienią się (np. po pobraniu z localStorage)
        enableReinitialize 
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Zapisanie kopii danych w przeglądarce (często używane jako szkic)
          localStorage.setItem("applicationData", JSON.stringify(values));
          setSubmitted(true);
        }}
      >
        <Form className="apply-form">
          <label>
            Имя*:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </label>

          <label>
            Email*:
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label>
            Как с Вами связаться:
            <Field type="text" name="contactMethod" />
          </label>

          <label>
            Телефон:
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </label>

          <label>
            Имя пользователя Telegram/Instagram:
            <Field type="text" name="username" />
          </label>

          <label>
            Сообщение:
            {/* Pole typu textarea dla dłuższych wiadomości */}
            <Field as="textarea" name="message" />
          </label>

          <label className="checkbox">
            <Field type="checkbox" name="agreement" /> Я согласен...
          </label>

          <ErrorMessage name="agreement" component="div" className="error" />

          <button type="submit" className="submit-btn">
            Отправить заявку
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default Apply;
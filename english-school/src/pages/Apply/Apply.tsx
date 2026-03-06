import { useState, useEffect } from "react";
import "./Apply.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),

  email: Yup.string()
    .email("Некорректный email")
    .required("Введите email"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "Только цифры"),

  agreement: Yup.boolean()
    .oneOf([true], "Необходимо согласие")

});

const Apply = () => {

  const [submitted, setSubmitted] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    contactMethod: "",
    phone: "",
    username: "",
    message: "",
    agreement: false,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("applicationData");

    if (savedData) {
      setInitialValues(JSON.parse(savedData));
    }
  }, []);

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

        enableReinitialize

        validationSchema={validationSchema}

        onSubmit={(values) => {

          localStorage.setItem(
            "applicationData",
            JSON.stringify(values)
          );

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
            <Field as="textarea" name="message" />
          </label>

          <label className="checkbox">
            <Field type="checkbox" name="agreement" /> Я согласен/согласна с обработкой персональных данных
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
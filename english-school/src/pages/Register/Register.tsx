import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Login/login.css";

const validationSchema = Yup.object({

  firstName: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),

  lastName: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите фамилию"),

  email: Yup.string()
    .email("Некорректный email")
    .required("Введите email"),

  password: Yup.string()
    .min(6, "Минимум 6 символов")
    .required("Введите пароль"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Повторите пароль"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "Только цифры"),

  birthDate: Yup.date()
    .max(new Date(), "Дата не может быть в будущем"),

});

export default function Register() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");
  const [needsConfirmation, setNeedsConfirmation] = useState(false);

  if (needsConfirmation) {
    return (
      <section className="login">
        <h2>Почти готово!</h2>
        <p>Мы отправили письмо на вашу почту. Подтвердите email, затем <Link to="/login">войдите</Link>.</p>
      </section>
    );
  }

  return (

    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        birthDate: "",
        level: "",
      }}

      validationSchema={validationSchema}

      onSubmit={async (values, { setSubmitting }) => {
        setSubmitError("");
        try {
          const mustConfirm = await auth?.register({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
            phone: values.phone,
            birth_date: values.birthDate,
            level: values.level,
          });

          if (mustConfirm) {
            setNeedsConfirmation(true);
          } else {
            navigate("/");
          }
        } catch (error) {
          setSubmitError(error instanceof Error ? error.message : "Не удалось зарегистрироваться");
        } finally {
          setSubmitting(false);
        }
      }}
    >

      {({ isSubmitting }) => (

      <Form className="login">

        <h2>Регистрация</h2>

        <Field type="text" name="firstName" placeholder="Имя*" autoComplete="given-name" />
        <ErrorMessage name="firstName" component="div" className="error" />

        <Field type="text" name="lastName" placeholder="Фамилия*" autoComplete="family-name" />
        <ErrorMessage name="lastName" component="div" className="error" />

        <Field type="email" name="email" placeholder="Email*" autoComplete="email" />
        <ErrorMessage name="email" component="div" className="error" />

        <Field type="password" name="password" placeholder="Пароль*" autoComplete="new-password" />
        <ErrorMessage name="password" component="div" className="error" />

        <Field type="password" name="confirmPassword" placeholder="Повторите пароль*" autoComplete="new-password" />
        <ErrorMessage name="confirmPassword" component="div" className="error" />

        <Field type="text" name="phone" placeholder="Телефон" autoComplete="tel" />
        <ErrorMessage name="phone" component="div" className="error" />

        <label className="login__label">
          Дата рождения:
          <Field type="date" name="birthDate" />
        </label>
        <ErrorMessage name="birthDate" component="div" className="error" />

        <Field as="select" name="level">
          <option value="">Уровень английского: не знаю</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </Field>

        {submitError && <div className="error">{submitError}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
        </button>

        <p className="login__switch">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>

      </Form>

      )}

    </Formik>

  );
}

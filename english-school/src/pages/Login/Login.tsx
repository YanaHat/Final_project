import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";

export default function Login() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email")
      .required("Введите email"),
    password: Yup.string()
      .required("Введите пароль"),
  });

  return (

    <Formik
      initialValues={{ email: "", password: "" }}

      validationSchema={validationSchema}

      onSubmit={async (values, { setSubmitting }) => {
        setSubmitError("");
        try {
          await auth?.login(values.email, values.password);
          navigate("/");
        } catch (error) {
          setSubmitError(error instanceof Error ? error.message : "Не удалось войти");
        } finally {
          setSubmitting(false);
        }
      }}
    >

      {({ isSubmitting }) => (

      <Form className="login">

        <h2>Вход</h2>

        <Field
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
        />

        <ErrorMessage
          name="email"
          component="div"
          className="error"
        />

        <Field
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="current-password"
        />

        <ErrorMessage
          name="password"
          component="div"
          className="error"
        />

        {submitError && <div className="error">{submitError}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Вход..." : "Войти"}
        </button>

        <p className="login__switch">
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </p>

      </Form>

      )}

    </Formik>

  );
}

import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useLanguage } from "../../i18n/LanguageContext";
import FieldError from "../../components/FieldError";
import "./login.css";

// В сообщениях — ключи ошибок, текст подставляется на текущем языке
const validationSchema = Yup.object({
  email: Yup.string()
    .email("emailInvalid")
    .required("emailRequired"),
  password: Yup.string()
    .required("passwordRequired"),
});

export default function Login() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { t, tError } = useLanguage();
  const [submitError, setSubmitError] = useState("");

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
          setSubmitError(
            error instanceof Error && error.message in t.errors ? error.message : "loginFailed"
          );
        } finally {
          setSubmitting(false);
        }
      }}
    >

      {({ isSubmitting }) => (

      <Form className="login">

        <h2>{t.login.title}</h2>

        <Field
          type="email"
          name="email"
          placeholder={t.login.email}
          autoComplete="email"
        />

        <FieldError name="email" />

        <Field
          type="password"
          name="password"
          placeholder={t.login.password}
          autoComplete="current-password"
        />

        <FieldError name="password" />

        {submitError && <div className="error">{tError(submitError)}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.login.submitting : t.login.submit}
        </button>

        <p className="login__switch">
          {t.login.noAccount} <Link to="/register">{t.login.toRegister}</Link>
        </p>

      </Form>

      )}

    </Formik>

  );
}

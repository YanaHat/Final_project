import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useLanguage } from "../../i18n/LanguageContext";
import FieldError from "../../components/FieldError";
import "../Login/login.css";

// В сообщениях — ключи ошибок, текст подставляется на текущем языке
const validationSchema = Yup.object({

  firstName: Yup.string()
    .min(2, "min2")
    .required("nameRequired"),

  lastName: Yup.string()
    .min(2, "min2")
    .required("lastNameRequired"),

  email: Yup.string()
    .email("emailInvalid")
    .required("emailRequired"),

  password: Yup.string()
    .min(6, "min6")
    .required("passwordRequired"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "passwordsMismatch")
    .required("confirmPasswordRequired"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "phoneDigits"),

  birthDate: Yup.date()
    .max(new Date(), "dateInFuture"),

});

export default function Register() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { t, tError } = useLanguage();
  const [submitError, setSubmitError] = useState("");
  const [needsConfirmation, setNeedsConfirmation] = useState(false);

  if (needsConfirmation) {
    return (
      <section className="login">
        <h2>{t.register.confirmTitle}</h2>
        <p>{t.register.confirmTextBefore} <Link to="/login">{t.register.confirmLink}</Link>.</p>
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
          setSubmitError(
            error instanceof Error && error.message in t.errors ? error.message : "registerFailed"
          );
        } finally {
          setSubmitting(false);
        }
      }}
    >

      {({ isSubmitting }) => (

      <Form className="login">

        <h2>{t.register.title}</h2>

        <Field type="text" name="firstName" placeholder={t.register.firstName} autoComplete="given-name" />
        <FieldError name="firstName" />

        <Field type="text" name="lastName" placeholder={t.register.lastName} autoComplete="family-name" />
        <FieldError name="lastName" />

        <Field type="email" name="email" placeholder={t.register.email} autoComplete="email" />
        <FieldError name="email" />

        <Field type="password" name="password" placeholder={t.register.password} autoComplete="new-password" />
        <FieldError name="password" />

        <Field type="password" name="confirmPassword" placeholder={t.register.confirmPassword} autoComplete="new-password" />
        <FieldError name="confirmPassword" />

        <Field type="text" name="phone" placeholder={t.register.phone} autoComplete="tel" />
        <FieldError name="phone" />

        <label className="login__label">
          {t.register.birthDate}
          <Field type="date" name="birthDate" />
        </label>
        <FieldError name="birthDate" />

        <Field as="select" name="level">
          <option value="">{t.register.level}</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="C1">C1</option>
          <option value="C2">C2</option>
        </Field>

        {submitError && <div className="error">{tError(submitError)}</div>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.register.submitting : t.register.submit}
        </button>

        <p className="login__switch">
          {t.register.haveAccount} <Link to="/login">{t.register.toLogin}</Link>
        </p>

      </Form>

      )}

    </Formik>

  );
}

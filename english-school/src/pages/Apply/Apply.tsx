import { useState, useEffect, useContext } from "react";
import "./apply.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { getStudent, saveStudent, StudentExistsError } from "../../Services/students";
import { createApplication } from "../../Services/applications";
import { useLanguage } from "../../i18n/LanguageContext";
import FieldError from "../../components/FieldError";

type ApplyValues = {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  level: string;
  contactMethod: string;
  phone: string;
  username: string;
  message: string;
  agreement: boolean;
};

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

  birthDate: Yup.date()
    .max(new Date(), "dateInFuture"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "phoneDigits"),

  agreement: Yup.boolean()
    .oneOf([true], "agreementRequired")

});

const emptyValues: ApplyValues = {
  firstName: "",
  lastName: "",
  email: "",
  birthDate: "",
  level: "",
  contactMethod: "",
  phone: "",
  username: "",
  message: "",
  agreement: false,
};

const Apply = () => {

  const auth = useContext(AuthContext);
  const { t, tError } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [initialValues, setInitialValues] = useState<ApplyValues>(emptyValues);

  const userId = auth?.user?.id;
  const userEmail = auth?.user?.email ?? "";

  useEffect(() => {
    if (!userId) return;

    const savedData = localStorage.getItem("applicationData");
    const draft: Partial<ApplyValues> = savedData ? JSON.parse(savedData) : {};

    // Подставляем данные, сохранённые при регистрации, поверх черновика
    getStudent(userId)
      .then((student) => {
        setInitialValues({
          ...emptyValues,
          ...draft,
          ...(student && {
            firstName: student.first_name,
            lastName: student.last_name,
            phone: student.phone ?? "",
            birthDate: student.birth_date ?? "",
            level: student.level ?? "",
          }),
          email: userEmail,
        });
      })
      .catch(() => {
        setInitialValues({ ...emptyValues, ...draft, email: userEmail });
      });
  }, [userId, userEmail]);

  if (submitted) {
    return (
      <section className="apply">
        <h2>{t.apply.success}</h2>
      </section>
    );
  }

  return (
    <section className="apply">

      <h1 className="apply-title">{t.apply.title}</h1>

      <p className="apply-subtitle">{t.common.requiredHint}</p>

      <Formik

        initialValues={initialValues}

        enableReinitialize

        validationSchema={validationSchema}

        onSubmit={async (values, { setSubmitting }) => {

          setSubmitError("");

          localStorage.setItem(
            "applicationData",
            JSON.stringify(values)
          );

          try {
            if (!userId) throw new Error("unknown");

            await saveStudent({
              id: userId,
              email: userEmail,
              first_name: values.firstName,
              last_name: values.lastName,
              phone: values.phone,
              birth_date: values.birthDate,
              level: values.level,
            });

            await createApplication({
              student_id: userId,
              contact_method: values.contactMethod,
              username: values.username,
              message: values.message,
            });

            localStorage.removeItem("applicationData");
            setSubmitted(true);
          } catch (error) {
            setSubmitError(
              error instanceof StudentExistsError ? "applyEmailTaken" : "applyFailed"
            );
          } finally {
            setSubmitting(false);
          }

        }}
      >

        {({ isSubmitting }) => (

        <Form className="apply-form">

          <label>
            {t.apply.firstName}
            <Field type="text" name="firstName" />
            <FieldError name="firstName" />
          </label>

          <label>
            {t.apply.lastName}
            <Field type="text" name="lastName" />
            <FieldError name="lastName" />
          </label>

          <label>
            {t.apply.email}
            <Field type="email" name="email" readOnly />
            <FieldError name="email" />
          </label>

          <label>
            {t.apply.birthDate}
            <Field type="date" name="birthDate" />
            <FieldError name="birthDate" />
          </label>

          <label>
            {t.apply.level}
            <Field as="select" name="level">
              <option value="">{t.common.levelUnknown}</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </Field>
          </label>

          <label>
            {t.apply.contactMethod}
            <Field type="text" name="contactMethod" />
          </label>

          <label>
            {t.apply.phone}
            <Field type="text" name="phone" />
            <FieldError name="phone" />
          </label>

          <label>
            {t.apply.username}
            <Field type="text" name="username" />
          </label>

          <label>
            {t.apply.message}
            <Field as="textarea" name="message" />
          </label>

          <label className="checkbox">
            <Field type="checkbox" name="agreement" /> {t.apply.agreement}
          </label>

          <FieldError name="agreement" />

          {submitError && <div className="error">{tError(submitError)}</div>}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t.apply.submitting : t.apply.submit}
          </button>

        </Form>

        )}

      </Formik>

    </section>
  );
};

export default Apply;

import { useState, useEffect, useContext } from "react";
import "./apply.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../Context/AuthContext";
import { getStudent, saveStudent, StudentExistsError } from "../../Services/students";
import { createApplication } from "../../Services/applications";

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

  birthDate: Yup.date()
    .max(new Date(), "Дата не может быть в будущем"),

  phone: Yup.string()
    .matches(/^[0-9+ ]*$/, "Только цифры"),

  agreement: Yup.boolean()
    .oneOf([true], "Необходимо согласие")

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

        onSubmit={async (values, { setSubmitting }) => {

          setSubmitError("");

          localStorage.setItem(
            "applicationData",
            JSON.stringify(values)
          );

          try {
            if (!userId) throw new Error("Пользователь не авторизован");

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
              error instanceof StudentExistsError
                ? "Этот email уже занят другой записью в таблице students. Удалите старую запись в Supabase."
                : "Не удалось отправить заявку. Попробуйте ещё раз."
            );
          } finally {
            setSubmitting(false);
          }

        }}
      >

        {({ isSubmitting }) => (

        <Form className="apply-form">

          <label>
            Имя*:
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" className="error" />
          </label>

          <label>
            Фамилия*:
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </label>

          <label>
            Email*:
            <Field type="email" name="email" readOnly />
            <ErrorMessage name="email" component="div" className="error" />
          </label>

          <label>
            Дата рождения:
            <Field type="date" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" className="error" />
          </label>

          <label>
            Уровень английского:
            <Field as="select" name="level">
              <option value="">Не знаю</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </Field>
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

          {submitError && <div className="error">{submitError}</div>}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </button>

        </Form>

        )}

      </Formik>

    </section>
  );
};

export default Apply;

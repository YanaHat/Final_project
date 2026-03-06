import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email")
      .required("Введите email"),
  });

  return (

    <Formik
      initialValues={{ email: "" }}

      validationSchema={validationSchema}

      onSubmit={(values) => {
        auth?.login(values.email);
        navigate("/");
      }}
    >

      <Form className="login">

        <h2>Login</h2>

        <Field
          type="email"
          name="email"
          placeholder="Email"
        />

        <ErrorMessage
          name="email"
          component="div"
          className="error"
        />

        <button type="submit">
          Login
        </button>

      </Form>

    </Formik>

  );
}
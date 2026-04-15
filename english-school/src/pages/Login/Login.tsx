import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom"; // Hook do programowego zmieniania stron
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

export default function Login() {
  // Uzyskanie dostępu do globalnych funkcji autoryzacji (login, user)
  const auth = useContext(AuthContext);
  
  // Inicjalizacja funkcji nawigacyjnej
  const navigate = useNavigate();

  // Definicja reguł walidacji dla pola email
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Некорректный email") // Sprawdza format @
      .required("Введите email"),  // Pole nie może być puste
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      // Logika wykonywana po kliknięciu przycisku "Login" i pomyślnej walidacji
      onSubmit={(values) => {
        // Wywołanie funkcji login z kontekstu, która ustawia stan użytkownika
        auth?.login(values.email);
        
        // Przekierowanie użytkownika na stronę główną ("/") po zalogowaniu
        navigate("/");
      }}
    >
      {/* Formularz logowania stylizowany klasą .login */}
      <Form className="login">
        <h2>Login</h2>

        {/* Pole wejściowe typu email połączone z Formikiem */}
        <Field
          type="email"
          name="email"
          placeholder="Email"
        />

        {/* Miejsce wyświetlania błędu, jeśli walidacja nie przejdzie */}
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
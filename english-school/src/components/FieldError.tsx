import { ErrorMessage } from "formik";
import { useLanguage } from "../i18n/LanguageContext";

// Выводит ошибку поля Formik на текущем языке (в схемах Yup хранятся ключи ошибок)
export default function FieldError({ name }: { name: string }) {
  const { tError } = useLanguage();

  return (
    <ErrorMessage name={name}>
      {(key) => <div className="error">{tError(key)}</div>}
    </ErrorMessage>
  );
}

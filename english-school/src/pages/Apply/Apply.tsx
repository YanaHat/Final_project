import { useState, useEffect } from "react";
import "./Apply.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactMethod: "",
    phone: "",
    username: "",
    message: "",
    agreement: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("applicationData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Пожалуйста, заполните обязательные поля.");
      return;
    }

    if (!formData.agreement) {
      setError("Необходимо согласие на обработку данных.");
      return;
    }

    localStorage.setItem("applicationData", JSON.stringify(formData));

    setError("");
    setSubmitted(true);
  };

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

      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Имя*:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email*:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Как с Вами связаться:
          <input
            type="text"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
          />
        </label>

        <label>
          Телефон:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Имя пользователя Telegram/Instagram:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Сообщение:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
          />
          Я согласен/согласна с обработкой персональных данных
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="submit-btn">
          Отправить заявку
        </button>
      </form>
    </section>
  );
};

export default Apply;

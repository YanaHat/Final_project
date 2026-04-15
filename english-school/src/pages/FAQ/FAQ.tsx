import { useState } from "react";
import "./FAQ.css";

// Stała przechowująca bazę pytań i odpowiedzi. 
// Dzięki temu treść jest oddzielona od struktury komponentu.
const faqData = [
  {
    question: "На каких уровнях языка проходит обучение?",
    answer: "Мы предлагаем обучение на уровнях от A1 до C2.",
  },
  {
    question: "Сколько длится один курс?",
    answer: "Средняя продолжительность курса — 3 месяца.",
  },
  {
    question: "Есть ли онлайн-занятия?",
    answer: "Да, мы проводим занятия как онлайн, так и офлайн.",
  },
  {
    question: "Сколько стоят занятия?",
    answer: "Стоимость одного занятия 90 минут — от 50 злотых. Оплата осуществляется помесячно или за семестр.",
  },
  {
    question: "В какое время проходят занятия?",
    answer: "Занятия проходят в то время, которое удобно для большинства учащихся группы. Это может быть утро, день или вечер.",
  },
  {
    question: "Отличается ли программа при индивидуальном обучении?",
    answer: "Индивидуальные занятия проходят по тому же курсу, но с учетом Ваших потребностей, можно будет уделять больше внимания конкретным аспектам языка. То есть курс будет адаптироваться под Вас.",
  },
  {
    question: "Есть ли онлайн-занятия?",
    answer: "Да, мы проводим занятия как онлайн, так и офлайн.",
  },
  {
    question: "Как формируются группы?",
    answer: "Группы формируются в зависимости от уровня учащихся и удобного для них времени занятий.",
  },
  {
    question: "Как проходит тестирование на уровень языка?",
    answer: "Мы присылаем Вам тест, который Вы сможете пройти онлайн в удобное для Вас время. Затем преподавателю нужно будет проверить Ваши навыки устного английского — это можно сделать в Zoom или Google Meet.",
  },
  {
    question: "Как начать обучение?",
    // Przykład odpowiedzi w formie tablicy (lista kroków)
    answer: [
      "Вы подаете заявку",
      "Мы с Вами связываемся",
      "Если Вы ранее изучали английский, то проходите тестирование онлайн",
      "Вы получаете расписание для группы Вашего уровня",
      "Заключаем договор",
      "Оплата"
    ],
  }
];

const FAQ = () => {
  // Stan przechowujący indeks aktualnie otwartego pytania.
  // 'number' oznacza indeks, 'null' oznacza, że wszystkie są zamknięte.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Funkcja przełączająca widoczność odpowiedzi.
  // Jeśli klikniemy w już otwarte pytanie, zamknie się ono (ustawi null).
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h1 className="faq-title">Часто задаваемые вопросы</h1>
      <p className="faq-subtitle">Найди нужную информацию...</p>

      <div className="faq-list">
        {/* Mapowanie danych z faqData na elementy interfejsu */}
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            {/* Przycisk pytania - po kliknięciu wywołuje toggleItem */}
            <button
              className="faq-question"
              onClick={() => toggleItem(index)}
            >
              {item.question}
            </button>

            {/* Renderowanie warunkowe: odpowiedź pokaże się tylko, 
                gdy activeIndex jest równy indeksowi danego elementu */}
            {activeIndex === index && (
              <div className="faq-answer">
                {/* Sprawdzanie typu danych: 
                    Jeśli odpowiedź jest tablicą, renderujemy listę numerowaną <ol>.
                    W przeciwnym wypadku wyświetlamy zwykły tekst. */}
                {Array.isArray(item.answer) ? (
                  <ol>
                    {item.answer.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                ) : (
                  item.answer
                )}
              </div>
            )}
          </div>   
        ))}
      </div>   
    </section>
  );
};

export default FAQ;
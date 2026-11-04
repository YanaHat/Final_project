import { useState } from "react";

import "./FAQ.css";
import { useLanguage } from "../../i18n/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
return (
  <section className="faq">
    <h1 className="faq-title">{t.faq.title}</h1>
    <p className="faq-subtitle">
      {t.faq.subtitle}
    </p>

    <div className="faq-list">
      {t.faq.items.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggleItem(index)}
          >
            {item.question}
          </button>

          {activeIndex === index && (
            <div className="faq-answer">
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

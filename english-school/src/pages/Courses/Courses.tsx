import "./courses.css"
import { useLanguage } from "../../i18n/LanguageContext";

const Courses = () => {
  const { t } = useLanguage();

  return (
    <section className="courses">
      <div className="container">
        <div className="courses-grid">
          <div className="card card--yellow">
            <h3 className="cardTitle">{t.courses.adultsTitle}</h3>
            <p>{t.courses.adultsText}</p>
          </div>

          <div className="card card--purple">
            <h3 className="cardTitle">{t.courses.nativeTitle}</h3>
            <p>{t.courses.nativeText}</p>
          </div>

          <div className="card card--green">
            <h3 className="cardTitle">{t.courses.individualTitle}</h3>
            <p>{t.courses.individualText}</p>
          </div>
        </div>
      </div>  
    </section>
  )
};

export default Courses;
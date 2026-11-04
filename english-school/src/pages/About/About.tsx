import './About.css'
import { Formik, Form, Field, type FormikHelpers } from "formik"
import * as Yup from "yup"
import { useLanguage } from "../../i18n/LanguageContext"
import FieldError from "../../components/FieldError"
interface FormValues {
  name: string;
  phone: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "min2")
    .required("nameRequired"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]*$/, "phoneInvalid")
    .required("phoneRequired")
})

const About = () => {
  const { t } = useLanguage();

const handleSubmit = (
  values: FormValues, 
  { resetForm }: FormikHelpers<FormValues>
) => {
  console.log("Данные формы:", values);
  alert(t.about.submitted);
  resetForm();
};

  return (
    <section className="about-section">
      <div className="container">

        <div className="hero-purple">
          <h2 className="hero-title">{t.about.title}</h2>

          <div className="hero-grid">
            <div className="hero-image">
              <img src="/src/assets/images/centrum.jpg" alt={t.about.cityCenterAlt} />
            </div>
            <div className="hero-text-card">
              <p>{t.about.location}</p>
              <p>{t.about.classrooms}</p>
            </div>

            <div className="hero-text-card">
              <p>{t.about.format}</p>
              <p>{t.about.teachers}</p>
              <p>{t.about.levels}</p>
            </div>
            <div className="hero-image">
              <img src="/src/assets/images/class.jpg" alt={t.about.classAlt} />
            </div>
          </div>
        </div>

        <div className="form-container">

          <div className="form-image">
            <img src="/src/assets/images/form.png" alt={t.about.illustrationAlt} />
          </div>

          <Formik
            initialValues={{
              name: "",
              phone: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >

            <Form className="contact-form">
              <h3>{t.about.formTitle}</h3>
              <label>
                {t.about.name}
                <Field
                  type="text"
                  name="name"
                  placeholder={t.about.namePlaceholder}
                />
                <FieldError name="name" />
              </label>

              <label>
                {t.about.phone}
                <Field
                  type="tel"
                  name="phone"
                  placeholder={t.about.phonePlaceholder}
                />
                <FieldError name="phone" />
              </label>

              <button type="submit" className="submit-btn">
                {t.about.submit}
              </button>

              <p className="privacy-text">
                {t.about.privacyText}{" "}
                <a href="https://englishprime.pl/politika/">
                  {t.about.privacyLink}
                </a>
              </p>
            </Form>
          </Formik>
        </div>

        <div className="certificates-section">
          <h3 className="certificates-title">
            {t.about.certificatesTitle}
          </h3>

          <div className="certificates-grid">
            <img src="/src/assets/images/cert1.png" alt={t.about.certificateAlt} />
            <img src="/src/assets/images/cert2.png" alt={t.about.certificateAlt} />
            <img src="/src/assets/images/cert3.png" alt={t.about.certificateAlt} />
            <img src="/src/assets/images/cert4.png" alt={t.about.certificateAlt} />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
import { useEffect, useState } from "react";
import "./news.css";
import { getNews} from "../../Services/getNews";
import type { NewsItem } from "../../Services/getNews";
import { useLanguage } from "../../i18n/LanguageContext";

const News = () => {
  const { t, language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then(setNews)
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container"><p>{t.news.loading}</p></div>;

  return (
    <section className="news-section">
      <div className="container">
        <h1 className="news-page-title">{t.news.title}</h1>
        <div className="news-grid">
          {news.map((item) => {
            // Если польского перевода нет, показываем русский текст
            const title = language === "pl" ? item.title_pl || item.title : item.title;
            const content = language === "pl" ? item.content_pl || item.content : item.content;

            return (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.imageUrl} alt={title} />
              </div>
              <div className="news-content">
                <h3>{title}</h3>
                <p>{content}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
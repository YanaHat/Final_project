import { useEffect, useState } from "react";
import "./news.css";
import { getNews} from "../../Services/api";
import type { NewsItem } from "../../Services/api";

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="container"><p>Загрузка новостей...</p></div>;

  return (
    <section className="news-section">
      <div className="container">
        <h1 className="news-page-title">Новости школы</h1>
        <div className="news-grid">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
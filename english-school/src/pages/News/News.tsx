import { useEffect, useState } from "react";
import "./news.css"
import { getNews } from "../../Services/api";

interface NewsItem {
  id: number;
  title: string;
  body: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Загрузка новостей...</p>;

  return (
    <section>
      <h1>Новости школы</h1>

      {news.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </section>
  );
};

export default News;
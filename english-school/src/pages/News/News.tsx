import { useEffect, useState } from "react";
import "./news.css";
// Import funkcji symulującej pobieranie danych z API oraz typu danych NewsItem
import { getNews } from "../../Services/api";
import type { NewsItem } from "../../Services/api";

const News = () => {
  // Stan przechowujący tablicę wiadomości. Początkowo jest to pusta lista.
  const [news, setNews] = useState<NewsItem[]>([]);
  
  // Stan kontrolujący wyświetlanie komunikatu o ładowaniu danych.
  const [loading, setLoading] = useState(true);

  // Hook useEffect uruchamia się raz, po pierwszym wyrenderowaniu komponentu.
  useEffect(() => {
    // Wywołanie asynchronicznej funkcji getNews z serwisu API.
    getNews().then((data) => {
      setNews(data);      // Zapisanie pobranych danych do stanu
      setLoading(false);  // Wyłączenie trybu ładowania
    });
  }, []); // Pusta tablica zależności oznacza: uruchom tylko raz

  // Renderowanie warunkowe: jeśli dane są jeszcze pobierane, pokaż komunikat "Загрузка..."
  if (loading) return <div className="container"><p>Загрузка новостей...</p></div>;

  return (
    <section className="news-section">
      <div className="container">
        <h1 className="news-page-title">Новости школы</h1>
        
        {/* Kontener typu grid do wyświetlania wiadomości w formie kafelków */}
        <div className="news-grid">
          {/* Iteracja po tablicy 'news'. Dla każdego elementu tworzymy osobną kartę. */}
          {news.map((item) => (
            <div key={item.id} className="news-card">
              
              {/* Sekcja graficzna wiadomości */}
              <div className="news-image">
                <img src={item.image} alt={item.title} />
              </div>
              
              {/* Sekcja tekstowa: tytuł oraz treść wiadomości */}
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
// Definicja interfejsu (modelu danych) dla pojedynczej wiadomości.
// Zapewnia to bezpieczeństwo typów w całym projekcie (TypeScript).
export interface NewsItem {
  id: number;      // Unikalny identyfikator (ważny dla kluczy w React .map())
  title: string;   // Tytuł nowości
  body: string;    // Treść (opis) nowości
  image: string;   // Ścieżka do zdjęcia profilowego wiadomości
}

// Funkcja symulująca pobieranie danych z bazy danych lub zewnętrznego API.
// Zwraca Obietnicę (Promise), która po zakończeniu dostarczy tablicę obiektów NewsItem.
export const getNews = (): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    // Użycie setTimeout symuluje opóźnienie sieciowe (1000ms = 1 sekunda).
    // Pozwala to przetestować, jak strona zachowuje się podczas czekania na dane.
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Набор в группу уровня A1",
          body: "Мечтали начать учить английский? С 15 марта стартует nowa grupa...",
          image: "./src/assets/images/group-a1.jpg"
        },
        {
          id: 2,
          title: "Romantic Movie Night",
          body: "В честь 14 февраля мы провели праздничный разговорный клуб...",
          image: "./src/assets/images/valentine.jpg"
        },
        {
          id: 3,
          title: "Подготовка к экзаменам IELTS/B2 First",
          body: "Открываем запись на интенсивный курс подготовки...",
          image: "./src/assets/images/exams.jpg"
        },
        {
          id: 4,
          title: "Каждую пятницу — Speaking Club",
          body: "Не бойтесь говорить! Каждую пятницу в 18:00 ждем вас...",
          image: "./src/assets/images/club.png"
        },
        {
          id: 5,
          title: "Обновление библиотеки школы",
          body: "Мы закупили свежую партию адаптированной литературы...",
          image: "./src/assets/images/books.png"
        },
        {
          id: 6,
          title: "Как учить слова быстрее?",
          body: "В нашем блоге вышла новая статья о технике интервальных повторений...",
          image: "./src/assets/images/tips.png"
        }
      ]);
    }, 1000); // 1 sekunda opóźnienia
  });
};
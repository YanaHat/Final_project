export interface NewsItem {
  id: number;
  title: string;
  body: string;
  image: string; // Новое поле для картинок
}

export const getNews = (): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Набор в группу уровня A1",
          body: "Мечтали начать учить английский? С 15 марта стартует новая группа для начинающих. Занятия проходят в просторных классах в центре города.",
          image: "./src/assets/images/group-a1.jpg"
        },
        {
          id: 2,
          title: "Romantic Movie Night",
          body: "В честь 14 февраля мы провели праздничный разговорный клуб. Смотрели кино в оригинале, играли в настолки и пили чай с вкусностями. Было очень атмосферно!",
          image: "./src/assets/images/valentine.jpg"
        },
        {
          id: 3,
          title: "Подготовка к экзаменам IELTS/B2 First",
          body: "Открываем запись на интенсивный курс подготовки к международным экзаменам. Разбираем структуру, ловушки и тренируем часть Speaking.",
          image: "./src/assets/images/exams.jpg"
        },
        {
          id: 4,
          title: "Каждую пятницу — Speaking Club",
          body: "Не бойтесь говорить! Каждую пятницу в 18:00 ждем вас на разговорном клубе. Тема этой недели: 'Путешествия и лайфхаки'.",
          image: "./src/assets/images/club.png"
        },
        {
          id: 5,
          title: "Обновление библиотеки школы",
          body: "Мы закупили свежую партию адаптированной литературы и журналов на английском. Студенты школы могут брать книги домой бесплатно!",
          image: "./src/assets/images/books.png"
        },
        {
          id: 6,
          title: "Как учить слова быстрее?",
          body: "В нашем блоге вышла новая статья о технике интервальных повторений. Читайте советы от наших преподавателей.",
          image: "./src/assets/images/tips.png"
        }
      ]);
    }, 1000);
  });
};

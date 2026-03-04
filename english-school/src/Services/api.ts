export interface NewsItem {
  id: number;
  title: string;
  body: string;
}

export const getNews = (): Promise<NewsItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Открытие новой группы A1",
          body: "С 15 марта стартует новая группа начального уровня."
        },
        {
          id: 2,
          title: "Разговорный клуб",
          body: "Каждую пятницу проходит разговорный клуб."
        }
      ]);
    }, 1000);
  });
};

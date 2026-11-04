export interface NewsItem {
  id: string;
  title: string;
  body: string;
  imageUrl: string; 
}

import supabase from '../supabaseClient.ts'; 

export const getNews = async (): Promise<NewsItem[]> => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false }); 

  if (error) {
    console.error('Ошибка получения новостей:', error);
    throw error;
  }

  return data as NewsItem[] || [];
};

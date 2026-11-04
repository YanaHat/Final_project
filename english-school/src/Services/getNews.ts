import supabase from '../supabaseClient.ts';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  title_pl: string | null;
  content_pl: string | null;
  imageUrl: string;
}

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

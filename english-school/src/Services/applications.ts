import supabase from '../supabaseClient.ts';

export interface NewApplication {
  student_id: string;
  contact_method?: string | null;
  username?: string | null;
  message?: string | null;
}

export const createApplication = async (application: NewApplication): Promise<void> => {
  const { error } = await supabase.from('applications').insert({
    student_id: application.student_id,
    contact_method: application.contact_method?.trim() || null,
    username: application.username?.trim() || null,
    message: application.message?.trim() || null,
  });

  if (error) {
    console.error('Ошибка сохранения заявки:', error);
    throw error;
  }
};

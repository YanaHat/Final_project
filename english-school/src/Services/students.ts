import supabase from '../supabaseClient.ts';

export interface StudentProfile {
  first_name: string;
  last_name: string;
  phone?: string | null;
  birth_date?: string | null;
  level?: string | null;
}

export interface NewStudent extends StudentProfile {
  id: string; 
  email: string;
}

export interface Student extends NewStudent {
  created_at: string;
  updated_at: string;
}

const UNIQUE_VIOLATION = '23505';

export class StudentExistsError extends Error {
  constructor() {
    super('Пользователь с таким email уже зарегистрирован');
    this.name = 'StudentExistsError';
  }
}

const normalizeProfile = (profile: StudentProfile): StudentProfile => ({
  first_name: profile.first_name.trim(),
  last_name: profile.last_name.trim(),
  phone: profile.phone?.trim() || null,
  birth_date: profile.birth_date || null,
  level: profile.level || null,
});

export const createStudent = async (student: NewStudent): Promise<void> => {
  const { error } = await supabase.from('students').insert({
    ...normalizeProfile(student),
    id: student.id,
    email: student.email.trim().toLowerCase(),
  });

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      throw new StudentExistsError();
    }
    console.error('Ошибка сохранения студента:', error);
    throw error;
  }
};

export const getStudent = async (id: string): Promise<Student | null> => {
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Ошибка получения студента:', error);
    throw error;
  }

  return data as Student | null;
};

// Создаёт запись студента, если её ещё нет, иначе обновляет существующую
export const saveStudent = async (student: NewStudent): Promise<void> => {
  const { error } = await supabase
    .from('students')
    .upsert(
      {
        ...normalizeProfile(student),
        id: student.id,
        email: student.email.trim().toLowerCase(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' }
    );

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      throw new StudentExistsError();
    }
    console.error('Ошибка сохранения студента:', error);
    throw error;
  }
};

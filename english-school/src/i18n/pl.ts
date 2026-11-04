import type { Translations } from "./ru";

const pl: Translations = {
  common: {
    loading: "Ładowanie...",
    requiredHint: "* - pole obowiązkowe!",
    levelUnknown: "Nie wiem",
  },

  nav: {
    menu: "Menu",
    login: "Logowanie",
    register: "Rejestracja",
    logout: "Wyloguj",
    about: "O szkole",
    courses: "Nauka",
    faq: "Pytania",
    apply: "Złóż wniosek",
    contacts: "Kontakt",
    news: "Aktualności",
  },

  social: {
    toggleTheme: "Zmień motyw",
    themeIcon: "Ikona motywu",
    toggleLanguage: "Переключить на русский",
  },

  footer: {
    privacy: "Polityka prywatności",
  },

  errors: {
    min2: "Minimum 2 znaki",
    min6: "Minimum 6 znaków",
    nameRequired: "Podaj imię",
    lastNameRequired: "Podaj nazwisko",
    emailInvalid: "Nieprawidłowy email",
    emailRequired: "Podaj email",
    passwordRequired: "Podaj hasło",
    confirmPasswordRequired: "Powtórz hasło",
    passwordsMismatch: "Hasła nie są zgodne",
    phoneDigits: "Tylko cyfry",
    phoneInvalid: "Nieprawidłowy format numeru telefonu",
    phoneRequired: "Podaj numer telefonu",
    dateInFuture: "Data nie może być z przyszłości",
    agreementRequired: "Wymagana jest zgoda",
    invalidCredentials: "Nieprawidłowy email lub hasło",
    emailNotConfirmed: "Potwierdź email, klikając link w wiadomości",
    emailExists: "Użytkownik z tym adresem email jest już zarejestrowany",
    weakPassword: "Hasło jest zbyt proste lub zbyt krótkie",
    loginFailed: "Nie udało się zalogować",
    registerFailed: "Nie udało się zarejestrować",
    applyFailed: "Nie udało się wysłać wniosku. Spróbuj ponownie.",
    applyEmailTaken: "Ten email jest już zajęty przez inny rekord w tabeli students. Usuń stary rekord w Supabase.",
    unknown: "Coś poszło nie tak. Spróbuj ponownie.",
  },

  login: {
    title: "Logowanie",
    email: "Email",
    password: "Hasło",
    submit: "Zaloguj się",
    submitting: "Logowanie...",
    noAccount: "Nie masz konta?",
    toRegister: "Zarejestruj się",
  },

  register: {
    title: "Rejestracja",
    firstName: "Imię*",
    lastName: "Nazwisko*",
    email: "Email*",
    password: "Hasło*",
    confirmPassword: "Powtórz hasło*",
    phone: "Telefon",
    birthDate: "Data urodzenia:",
    level: "Poziom angielskiego: nie wiem",
    submit: "Zarejestruj się",
    submitting: "Rejestracja...",
    haveAccount: "Masz już konto?",
    toLogin: "Zaloguj się",
    confirmTitle: "Prawie gotowe!",
    confirmTextBefore: "Wysłaliśmy wiadomość na Twój adres email. Potwierdź email, a następnie",
    confirmLink: "zaloguj się",
  },

  apply: {
    title: "Złóż wniosek",
    success: "Dziękujemy! Twój wniosek został wysłany.",
    firstName: "Imię*:",
    lastName: "Nazwisko*:",
    email: "Email*:",
    birthDate: "Data urodzenia:",
    level: "Poziom angielskiego:",
    contactMethod: "Jak się z Tobą skontaktować:",
    phone: "Telefon:",
    username: "Nazwa użytkownika Telegram/Instagram:",
    message: "Wiadomość:",
    agreement: "Wyrażam zgodę na przetwarzanie danych osobowych",
    submit: "Wyślij wniosek",
    submitting: "Wysyłanie...",
  },

  about: {
    title: "O szkole English Prime",
    cityCenterAlt: "Centrum miasta",
    classAlt: "Zajęcia",
    illustrationAlt: "Ilustracja",
    location: "Dogodna lokalizacja w samym sercu miasta",
    classrooms: "Wygodne sale z tablicą interaktywną",
    format: "Zajęcia online i stacjonarne",
    teachers: "Doświadczeni lektorzy",
    levels: "Poziomy od A1 do C1",
    formTitle: "Zapisz się na lekcję próbną",
    name: "Imię*",
    namePlaceholder: "Twoje imię",
    phone: "Telefon*",
    phonePlaceholder: "Twój numer telefonu",
    submit: "Wyślij",
    submitted: "Zgłoszenie wysłane!",
    privacyText: "*Klikając przycisk «Wyślij», akceptujesz",
    privacyLink: "politykę prywatności",
    certificatesTitle: "Certyfikaty lektorów",
    certificateAlt: "certyfikat",
  },

  courses: {
    adultsTitle: "Kursy języka angielskiego dla dorosłych",
    adultsText: "Prowadzimy zajęcia w oparciu o popularny kurs Cambridge. Jeden poziom realizujemy w 9 miesięcy. Po jego ukończeniu otrzymujesz certyfikat naszej szkoły. W ramach zajęć prace domowe i testy wykonywane są na platformie Cambridge. Zajęcia prowadzą doświadczeni, certyfikowani lektorzy z dyplomami z lingwistyki i filologii angielskiej.",
    nativeTitle: "Konwersacje po angielsku z native speakerem",
    nativeText: "Nasz lektor Edward uczy angielskiego już od 12 lat. Dobierze dla Ciebie indywidualny program, uwzględniając Twoje cele i potrzeby. Zajęcia z Edwardem to świetna okazja, by przełamać barierę językową i nauczyć się nie tylko rozumieć język, ale też swobodnie wyrażać w nim swoje myśli.",
    individualTitle: "Nauka angielskiego z rosyjskojęzycznym lektorem indywidualnie lub w parze",
    individualText: "Takie zajęcia będą dla Ciebie odpowiednie, jeśli masz nieregularny grafik pracy lub chcesz, aby lektor dobrał dla Ciebie indywidualny program.",
  },

  contacts: {
    title: "Kontakt",
    phone: "Telefon:",
  },

  news: {
    title: "Aktualności szkoły",
    loading: "Ładowanie aktualności...",
  },

  faq: {
    title: "Często zadawane pytania",
    subtitle: "Znajdź potrzebne informacje — odpowiedzieliśmy już na większość pytań",
    items: [
      {
        question: "Na jakich poziomach prowadzona jest nauka?",
        answer: "Oferujemy naukę na poziomach od A1 do C2.",
      },
      {
        question: "Ile trwa jeden kurs?",
        answer: "Średni czas trwania kursu to 3 miesiące.",
      },
      {
        question: "Czy są zajęcia online?",
        answer: "Tak, prowadzimy zajęcia zarówno online, jak i stacjonarnie.",
      },
      {
        question: "Ile kosztują zajęcia?",
        answer: "Koszt jednych zajęć trwających 90 minut — od 50 złotych. Płatność jest miesięczna lub za semestr.",
      },
      {
        question: "W jakich godzinach odbywają się zajęcia?",
        answer: "Zajęcia odbywają się w godzinach dogodnych dla większości uczestników grupy. Może to być rano, w ciągu dnia lub wieczorem.",
      },
      {
        question: "Czy program zajęć indywidualnych się różni?",
        answer: "Zajęcia indywidualne odbywają się według tego samego kursu, ale z uwzględnieniem Twoich potrzeb — można poświęcić więcej uwagi konkretnym aspektom języka. Oznacza to, że kurs zostanie dopasowany do Ciebie.",
      },
      {
        question: "Czy są zajęcia online?",
        answer: "Tak, prowadzimy zajęcia zarówno online, jak i stacjonarnie.",
      },
      {
        question: "Jak tworzone są grupy?",
        answer: "Grupy tworzone są w zależności od poziomu uczestników i dogodnych dla nich godzin zajęć.",
      },
      {
        question: "Jak wygląda test poziomujący?",
        answer: "Wysyłamy Ci test, który możesz rozwiązać online w dogodnym dla siebie czasie. Następnie lektor sprawdzi Twoje umiejętności mówienia po angielsku — można to zrobić przez Zoom lub Google Meet.",
      },
      {
        question: "Jak rozpocząć naukę?",
        answer: [
          "Składasz wniosek",
          "Kontaktujemy się z Tobą",
          "Jeśli uczyłeś się wcześniej angielskiego, rozwiązujesz test online",
          "Otrzymujesz harmonogram zajęć dla grupy na Twoim poziomie",
          "Podpisujemy umowę",
          "Płatność",
        ],
      },
    ],
  },
};

export default pl;

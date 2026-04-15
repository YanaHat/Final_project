import { useContext, type ReactNode } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

// Definicja typu dla właściwości (props) komponentu.
// ReactNode pozwala na przekazanie dowolnej treści JSX jako "children".
type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  // Pobranie danych o autoryzacji z globalnego kontekstu (AuthContext).
  // Dzięki useContext mamy dostęp do informacji o zalogowanym użytkowniku w całej aplikacji.
  const auth = useContext(AuthContext);

  // 1. Obsługa stanu ładowania:
  // Jeśli aplikacja wciąż sprawdza sesję użytkownika (np. wysyła zapytanie do Firebase/API),
  // wyświetlamy komunikat "Loading", aby uniknąć przedwczesnego przekierowania.
  if (auth?.loading) {
    return <div>Loading...</div>;
  }

  // 2. Walidacja użytkownika:
  // Jeśli proces ładowania się zakończył, a obiekt 'user' nie istnieje (jest null/undefined),
  // oznacza to, że użytkownik nie jest zalogowany. 
  // Komponent <Navigate /> automatycznie przenosi go na stronę logowania.
  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  // 3. Autoryzacja zakończona sukcesem:
  // Jeśli użytkownik jest zalogowany, komponent zwraca "children", 
  // czyli wyświetla chronioną treść strony, którą otoczyliśmy tym komponentem.
  return children;
}
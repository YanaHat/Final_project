// Import dedykowanych stylów. 
// Plik ten prawdopodobnie zawiera definicje kolorów dla klas card--yellow, card--purple itd.
import "./courses.css"

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        
        {/* Kontener typu Grid, który zarządza rozmieszczeniem kart. 
            Zapewnia równe odstępy i responsywność (np. 3 kolumny na desktopie, 1 na mobile). */}
        <div className="courses-grid">
          
          {/* Karta kursu standardowego. 
              Klasa 'card--yellow' to tzw. modyfikator (metodologia BEM), 
              który nadaje karcie specyficzny kolor tła. */}
          <div className="card card--yellow">
            <h3 className="cardTitle">Курсы английского языка для взрослых</h3>
            <p>
              Opis kursu Cambridge, informacja o 9-miesięcznym cyklu 
              nauk oraz certyfikacji i platformie online.
            </p>
          </div>

          {/* Karta Native Speaker. 
              Personalizacja oferty poprzez wymienienie konkretnego lektora (Edward). */}
          <div className="card card--purple">
            <h3 className="cardTitle">Практика разговорного английского с носителем языка</h3>
            <p>
              Skupienie na przełamywaniu bariery językowej 
              i indywidualnym podejściu do ucznia.
            </p>
          </div>

          {/* Karta zajęć indywidualnych/par. 
              Rozwiązanie dla osób z nieregularnym grafikiem. */}
          <div className="card card--green">
            <h3 className="cardTitle">Изучение английского с русскоязычным преподавателем...</h3>
            <p>
              Elastyczność i dopasowanie programu pod konkretne potrzeby klienta.
            </p>
          </div>

        </div>
      </div>  
    </section>
  )
};

export default Courses;
// Import dedykowanego arkusza stylów dla stopki.
// Pozwala to na zachowanie modularności i separację wyglądu od logiki.
import "./Footer.css";

const Footer = () => {
  return (
    // Użycie semantycznego tagu HTML5 <footer> zamiast zwykłego <div>.
    // Jest to ważne dla SEO oraz czytników ekranu (dostępność strony).
    <footer className="footer">
      {/* Kontener centrujący treść, zazwyczaj posiadający zdefiniowaną maksymalną szerokość w pliku CSS (np. max-width: 1200px) */}
      <div className="container">
        <span>English Prime © 2024</span>
        <a href="https://englishprime.pl/politika/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;

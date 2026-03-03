import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";

import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Apply from "./pages/Apply/Apply";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";

function AppContent() {
  const location = useLocation();

  const hideSocial = location.pathname === "/contacts";

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>

      {!hideSocial && <Social />}

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;


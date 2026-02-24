import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Apply from "./pages/Apply/Apply";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

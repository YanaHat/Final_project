import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import FAQ from "./pages/FAQ/FAQ";
import Apply from "./pages/Apply/Apply";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import ProtectedRoute from "../src/components/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideSocial = location.pathname === "/contacts";

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/apply"
          element={
            <ProtectedRoute>
              <Apply />
            </ProtectedRoute>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
      </Routes>

      {!hideSocial && <Social />}

      <Footer />
    </>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Animations from "./pages/Animations";
import Contact from "./pages/Contact";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="movies" element={<Movies />} />
        <Route path="series" index element={<Series />} />
        <Route path="animations" element={<Animations />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

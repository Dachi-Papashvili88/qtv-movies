import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<Movies />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

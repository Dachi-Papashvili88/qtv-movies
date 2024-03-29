import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Animations from "./pages/Animations";
import Documentary from "./pages/Documentary";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" index element={<Series />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/documentary" element={<Documentary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthContextProvider>
  );
}

export default App;

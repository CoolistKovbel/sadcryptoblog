import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import WelcomePage from "./pages/Welcome";
import TheContact from "./pages/Contact";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Login from "./pages/Login";



function App() {
  return (
    <>
      <MainHeader />

      <Router>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<TheContact />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </Router>

      <MainFooter />
    </>
  );
}

export default App;

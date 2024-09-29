import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import WelcomePage from "./pages/Welcome";
import TheContact from "./pages/Contact";
import MainHeader from "./components/MainHeader";



function App() {
  return (
    <>
      <MainHeader />

      <Router>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<TheContact />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

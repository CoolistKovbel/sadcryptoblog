import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import WelcomePage from "./pages/Welcome";
import TheContact from "./pages/Contact";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Auth from "./pages/Auth";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <MainHeader />

      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<TheContact />} /> */}
        </Routes>
      </Router>

      <MainFooter />
    </main>
  );
}

export default App;

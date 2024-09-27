import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainHeader from "./components/layout/main-header/header";
import TheWelcome from "./components/TheWelcome";
import TheAbout from "./components/TheAbout";
import TheContact from "./components/layout/contact-page/TheContact";


function App() {
  return (
    <>
      <MainHeader />

      <Router>
        <Routes>
          <Route path="/" element={<TheWelcome />} />
          <Route path="/about" element={<TheAbout />} />
          <Route path="/contact" element={<TheContact />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

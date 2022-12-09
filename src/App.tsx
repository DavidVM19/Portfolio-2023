import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Profil from "./components/pages/Profil";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

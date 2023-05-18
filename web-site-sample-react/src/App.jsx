import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { PrincipalPage } from "./Components/Pages/Principal/PrincipalPage";
import { About } from "./Components/Pages/About/About";
import { Footer } from "./Components/Footer/Footer";
import { NotFound } from "./Components/Pages/NotFound/NotFound";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

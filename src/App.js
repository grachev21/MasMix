import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import "./styles/main.css";
import "./styles/color.css";

import Header from "./components/header/Header";

import Project from "./pages/Project";
import Home from "./pages/home/Home";
import About from "./pages/About";



const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App; 

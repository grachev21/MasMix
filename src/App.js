import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./styles/main.css";
import "./styles/color.css";

import Header from "./components/header/Header";

import Project from "./pages/Project";
import Home from "./pages/home/Home";
import About from "./pages/About";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
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

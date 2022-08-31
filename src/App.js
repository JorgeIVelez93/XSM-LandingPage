import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Resources from "./components/Resources";

function App() {
  return (
    <div>
      {/* <div>
        <Navbar />
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<AboutUs />} />
        <Route path="/contact" element={<AboutUs />} />

        <Route path="/news" element={<AboutUs />} />
        <Route path="/*" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

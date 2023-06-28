import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing.js";
import Flights from "./pages/Flights.js";
import About from "./pages/About.js";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
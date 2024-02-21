import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Auth from "./pages/Auth/index";
import Ratings from "./pages/Ratings/index";
//import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ratings" element={<Ratings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Auth from "./pages/Auth/index";
import Ratings from "./pages/Ratings/index";
import "./App.css";
import Navbar from "./components/Navbar";
import { TvShow } from "./pages/Tvshow";
import { Movie } from "./pages/Movie";

function App() {
  return (
    <div style={{ margin: '0 auto'}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvshow/:id" element={<TvShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

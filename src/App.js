import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import ErrorPage from "./Pages/ErrorPage";

// We're going to use 3 endpoints from Giphy API
// random, trending, search?

export default function App () {
  return (
    <Router>
      <nav>
        <Link to="/">Random</Link> &nbsp; | &nbsp; 
        <Link to="/trending">Trending</Link>
        <Link to=""></Link>
      </nav>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
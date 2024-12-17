import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Home/Hero";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Products";
// import Services from "./pages/Services";
// import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Hero/>
    </Router>
  );
};

export default App;

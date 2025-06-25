import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./Home";
import About from "./About";
import Notfound from "./Notfound";
import Detail from "./Detail";
function App() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/Notfound"}>Notfound</Link>
        <Link to={"/Detail"}>Detail</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

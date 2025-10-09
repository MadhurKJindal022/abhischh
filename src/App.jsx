import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import WallClockPage from "./pages/WallClock";
import Brands from "./pages/Brands";

// Layout
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Open Home directly on "/" */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/wallclock" element={<WallClockPage />} />
          <Route path="/about" element={<About />} />

          {/* Instead of 404, redirect all unknown paths to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

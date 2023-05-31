import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./components/Page404";

// Styles
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </div>
);

export default App;

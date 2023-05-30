import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./components/Page404";

// Styles
import "./App.scss";
import Maintenance from "./pages/Maintenance";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Maintenance />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </div>
);

export default App;

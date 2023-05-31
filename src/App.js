import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./components/Page404";
import Maintenance from "./pages/Maintenance";

// Styles
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        {JSON.parse(process.env.REACT_APP_MODE_MAINTENANCE) ? (
          <Route path="/" element={<Maintenance />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  </div>
);

export default App;

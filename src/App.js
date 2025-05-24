import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeUpload from "./Components/ResumeUpload";
import Homepage from "./Components/Homepage"; // Another page/component
import Analysis from "./Components/Analysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ResumeUpload" element={<ResumeUpload />} />
        <Route path="/Analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;

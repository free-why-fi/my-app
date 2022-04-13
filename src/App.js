import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage.js";
import SubPage from "./SubPage.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SubPage" element={<SubPage />} />
      </Routes>
    </div>
  );
}
export default App;
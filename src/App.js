import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LearnScreen from "./screens/LearnScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/lecture/:lecId" element={<LearnScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

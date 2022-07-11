import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import DashboardMain from "./views/DashboardMain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </div>
  );
}

export default App;

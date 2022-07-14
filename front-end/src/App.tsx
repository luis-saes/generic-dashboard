import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import DashboardMain from "./views/DashboardMain";
import ProductsScreen from "./views/ProductsScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/products" element={<ProductsScreen />} />
      </Routes>
    </div>
  );
}

export default App;

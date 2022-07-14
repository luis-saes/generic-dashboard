import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import DashboardMain from "./views/DashboardMain";
import ProductsScreen from "./views/ProductsScreen";
import ClientsScreen from "./views/ClientsScreen";
import EmployeesScreen from "./views/EmployeesScreen";
import SalesScreen from "./views/SalesScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/clients" element={<ClientsScreen />} />
        <Route path="/employees" element={<EmployeesScreen />} />
        <Route path="/sales" element={<SalesScreen />} />
      </Routes>
    </div>
  );
}

export default App;

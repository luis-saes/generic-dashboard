import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import styles from "./EmployeesScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const EmployeesScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}></div>
    </div>
  );
};

export default EmployeesScreen;

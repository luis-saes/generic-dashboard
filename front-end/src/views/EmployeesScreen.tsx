import React from "react";
import styles from "./EmployeesScreen.module.css";
import stylesSidebar from "./SidebarMain.module.css";
import Sidebar from "../components/Dashboard/Sidebar";

const EmployeesScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={styles.board}></div>
    </div>
  );
};

export default EmployeesScreen;

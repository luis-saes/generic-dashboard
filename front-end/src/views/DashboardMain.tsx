import React from "react";
import styles from "./DashboardMain.module.css";
import stylesSidebar from "./SidebarMain.module.css";
import Sidebar from "../components/Dashboard/Sidebar";
import logo from "../assets/logo.png";

const DashboardMain = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={styles.board}>
        <img src={logo} alt="Dashboard Logo" />
      </div>
    </div>
  );
};

export default DashboardMain;

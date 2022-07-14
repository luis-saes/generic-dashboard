import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import styles from "./DashboardMain.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";
import logo from "../assets/logo.png";

const DashboardMain = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}>
        <img src={logo} alt="Dashboard Logo" />
      </div>
    </div>
  );
};

export default DashboardMain;

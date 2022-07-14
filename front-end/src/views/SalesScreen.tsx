import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import styles from "./SalesScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const SalesScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}></div>
    </div>
  );
};

export default SalesScreen;

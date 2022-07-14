import React from "react";
import styles from "./SalesScreen.module.css";
import stylesSidebar from "./SidebarMain.module.css";
import Sidebar from "../components/Dashboard/Sidebar";

const SalesScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={styles.board}></div>
    </div>
  );
};

export default SalesScreen;

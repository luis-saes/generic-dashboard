import React from "react";
import styles from "./DashboardMain.module.css";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardMain = () => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={styles.board}></div>
    </div>
  );
};

export default DashboardMain;

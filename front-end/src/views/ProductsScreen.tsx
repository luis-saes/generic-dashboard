import React from "react";
import styles from "./ProductsScreen.module.css";
import stylesSidebar from "./SidebarMain.module.css";
import Sidebar from "../components/Dashboard/Sidebar";

const ProductsScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={styles.board}></div>
    </div>
  );
};

export default ProductsScreen;

import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ProductsScreen.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ProductsScreen = () => {
  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={styles.board}>
        <GenericTable />
      </div>
    </div>
  );
};

export default ProductsScreen;

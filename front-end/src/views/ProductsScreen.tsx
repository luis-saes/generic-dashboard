import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ProductsScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ProductsScreen = () => {
  const headArray: string[] = ["ID", "Name", "Price", "Available Quantity"];

  const tableTestData: (string | number)[][] = [
    [1, "meat", 109.9, 15],
    [2, "rice", 45.99, 97],
    [3, "sushi", 22.7, 804],
    [4, "carrot", 15.1, 9],
    [5, "chicken", 22.8, 153],
  ];

  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}>
        <GenericTable headArray={headArray} dataArray={tableTestData} />
      </div>
    </div>
  );
};

export default ProductsScreen;

import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./SalesScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const SalesScreen = () => {
  const headArray: string[] = [
    "ID",
    "Product ID",
    "Employee ID",
    "Quantity",
    "Total",
  ];

  const tableTestData: (string | number)[][] = [
    [1, 5, 4, 1, 22.8],
    [2, 4, 3, 1, 15.1],
    [3, 1, 1, 32, 3516.8],
    [4, 3, 5, 4, 90.8],
    [5, 2, 2, 2, 91.98],
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

export default SalesScreen;

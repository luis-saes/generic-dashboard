import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ProductsScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ProductsScreen = () => {
  const headArray: string[] = ["ID", "Name", "Price", "Available Quantity"];

  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, "meat", 109.9, 15],
    [2, "rice", 45.99, 97],
    [3, "sushi", 22.7, 804],
    [4, "carrot", 15.1, 9],
    [5, "chicken", 22.8, 153],
  ]);

  const editLineHandler = (index: any) => {
    console.log("called with index: " + index);
  };

  const deleteLineHandler = (index: any) => {
    setTableData(
      tableData.filter((el) => {
        return el[0] !== index;
      })
    );
  };

  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}>
        <GenericTable
          headArray={headArray}
          dataArray={tableData}
          editLine={editLineHandler}
          deleteLine={deleteLineHandler}
        />
      </div>
    </div>
  );
};

export default ProductsScreen;

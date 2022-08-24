import React, { useState } from "react";
import { editLine, deleteLine } from "../utils/Utils";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ProductsScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ProductsScreen = () => {
  const [headArray, setHeadArray] = useState<string[]>([
    "ID",
    "Name",
    "Price",
    "Available Quantity",
  ]);
  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, "meat", 109.9, 15],
    [2, "rice", 45.99, 97],
    [3, "sushi", 22.7, 804],
    [4, "carrot", 15.1, 9],
    [5, "chicken", 22.8, 153],
  ]);
  const [dataTypes, setDataTypes] = useState<string[]>([
    "number",
    "string",
    "number",
    "number",
  ]);

  const editLineHandler = (index: number, newLine: (string | number)[]) => {
    editLine(index, newLine, setTableData, tableData);
  };

  const deleteLineHandler = (index: string | number) => {
    deleteLine(index, setTableData);
  };

  const addLineHandler = (val: (string | number)[]) => {
    setTableData([...tableData, val]);
  };

  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}>
        <GenericTable
          headArray={headArray}
          dataTypes={dataTypes}
          dataArray={tableData}
          editLine={editLineHandler}
          deleteLine={deleteLineHandler}
          addLine={addLineHandler}
        />
      </div>
    </div>
  );
};

export default ProductsScreen;

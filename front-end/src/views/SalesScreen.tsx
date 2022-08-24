import React, { useState } from "react";
import { editLine, deleteLine } from "../utils/Utils";
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

  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, 5, 4, 1, 22.8],
    [2, 4, 3, 1, 15.1],
    [3, 1, 1, 32, 3516.8],
    [4, 3, 5, 4, 90.8],
    [5, 2, 2, 2, 91.98],
  ]);
  const [dataTypes, setDataTypes] = useState<string[]>([
    "number",
    "number",
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

export default SalesScreen;

import React, { useState } from "react";
import { editLine, deleteLine } from "../utils/Utils";
import Sidebar from "../components/dashboard/Sidebar";
import GenericTable from "../components/tables/GenericTable";
import styles from "./EmployeesScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const EmployeesScreen = () => {
  const headArray: string[] = ["ID", "Name", "Cell Phone Number", "Salary"];

  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, "Elysia John", 9598456442, 1833.54],
    [2, "Amanda Guerrero", 6102324200, 3101.82],
    [3, "Lillie-May Charlton", 7484484456, 5104.95],
    [4, "Saxon Tanner", 1294110868, 5754.22],
    [5, "Taylah Fletcher", 5371407450, 4321.9],
  ]);
  const [dataTypes, setDataTypes] = useState<string[]>([
    "number",
    "text",
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

export default EmployeesScreen;

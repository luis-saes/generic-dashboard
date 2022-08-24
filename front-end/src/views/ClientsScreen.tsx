import React, { useState } from "react";
import { editLine, deleteLine } from "../utils/Utils";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ClientsScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ClientsScreen = () => {
  const [headArray, setHeadArray] = useState<string[]>([
    "ID",
    "Name",
    "Cell Phone Number",
  ]);
  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, "Laibah Ashley", 7079690494],
    [2, "Joseff Stark", 9118041434],
    [3, "Jay Mohamed", 5138211780],
    [4, "Damon Bryant", 5238765584],
    [5, "Ayra Martins", 4782410090],
  ]);
  const [dataTypes, setDataTypes] = useState<string[]>([
    "number",
    "text",
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

export default ClientsScreen;

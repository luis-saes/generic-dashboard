import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./ClientsScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const ClientsScreen = () => {
  const headArray: string[] = ["ID", "Name", "Cell Phone Number"];

  const [tableData, setTableData] = useState<(string | number)[][]>([
    [1, "Laibah Ashley", 7079690494],
    [2, "Joseff Stark", 9118041434],
    [3, "Jay Mohamed", 5138211780],
    [4, "Damon Bryant", 5238765584],
    [5, "Ayra Martins", 4782410090],
  ]);

  const editLineHandler = (index: any, newLine: (string | number)[]) => {};

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
          addLine={() => console.log(0)}
        />
      </div>
    </div>
  );
};

export default ClientsScreen;

import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import GenericTable from "../components/Tables/GenericTable";
import styles from "./EmployeesScreen.module.css";
import stylesBoard from "./Board.module.css";
import stylesSidebar from "./SidebarMain.module.css";

const EmployeesScreen = () => {
  const headArray: string[] = ["ID", "Name", "Cell Phone Number", "Salary"];

  const tableTestData: (string | number)[][] = [
    [1, "Elysia John", 9598456442, 1833.54],
    [2, "Amanda Guerrero", 6102324200, 3101.82],
    [3, "Lillie-May Charlton", 7484484456, 5104.95],
    [4, "Saxon Tanner", 1294110868, 5754.22],
    [5, "Taylah Fletcher", 5371407450, 4321.9],
  ];

  return (
    <div className={stylesSidebar.main}>
      <Sidebar />
      <div className={stylesBoard.board}>
        <GenericTable
          headArray={headArray}
          dataArray={tableTestData}
          editLine={() => console.log(0)}
          deleteLine={() => console.log(0)}
        />
      </div>
    </div>
  );
};

export default EmployeesScreen;

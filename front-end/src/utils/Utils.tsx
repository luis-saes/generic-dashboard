import React from "react";

const editLine = (
  index: number,
  newLine: (string | number)[],
  setTableData: React.Dispatch<React.SetStateAction<(string | number)[][]>>,
  tableData: (string | number)[][]
) => {
  let newLineWithIndex: (string | number)[] = [];
  newLineWithIndex = [...tableData[index].slice(0, 1), ...newLine];

  setTableData([
    ...tableData.slice(0, index),
    newLineWithIndex,
    ...tableData.slice(index + 1),
  ]);
};

const deleteLine = (
  index: string | number,
  setTableData: React.Dispatch<React.SetStateAction<(string | number)[][]>>
) => {
  setTableData((currentTableData: (string | number)[][]) =>
    currentTableData.filter((el: any) => {
      return el[0] !== index;
    })
  );
};

export { editLine, deleteLine };

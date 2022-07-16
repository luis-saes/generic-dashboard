import React from "react";
import Table from "react-bootstrap/Table";
import Pencil from "../../assets/pencil-fill.svg";
import Trash from "../../assets/trash-fill.svg";
import styles from "./GenericTable.module.css";

type PrivateProps = {
  headArray: string[];
  dataArray: (string | number)[][];
  editLine: (val: string | number) => void;
  deleteLine: (val: string | number) => void;
};

const GenericTable = (props: PrivateProps) => {
  const editHandler = (index: number): void => {
    props.editLine(props.dataArray[index][0]);
  };

  const deleteHandler = (index: number): void => {
    props.deleteLine(props.dataArray[index][0]);
  };

  return (
    <div className={styles.main}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.headArray?.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.dataArray?.map((array, i) => {
            return (
              <tr key={i}>
                {array?.map((val, j) => {
                  return <td key={j}>{val}</td>;
                })}
                <td className={styles.actions}>
                  <div
                    className={styles.wrapper}
                    onClick={() => editHandler(i)}
                  >
                    <img
                      src={Pencil}
                      alt="pencil icon"
                      className={styles.icon}
                    />
                  </div>
                  <div
                    className={styles.wrapper}
                    onClick={() => deleteHandler(i)}
                  >
                    <img src={Trash} alt="trash icon" className={styles.icon} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default GenericTable;

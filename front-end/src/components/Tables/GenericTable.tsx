import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Pencil from "../../assets/pencil-fill.svg";
import Trash from "../../assets/trash-fill.svg";
import styles from "./GenericTable.module.css";
import FormText from "react-bootstrap/esm/FormText";

type PrivateProps = {
  headArray: string[];
  dataArray: (string | number)[][];
  editLine: (val: string | number) => void;
  deleteLine: (val: string | number) => void;
};

const GenericTable = (props: PrivateProps) => {
  const [edited, setEdited] = useState<boolean[]>(
    props.dataArray.map((el) => false)
  );

  const headArrayLength: number = props.headArray.length;

  const editHandler = (index: number): void => {
    if (edited[index]) {
      setEdited([...edited.slice(0, index), false, ...edited.slice(index + 1)]);
    } else {
      setEdited([...edited.slice(0, index), true, ...edited.slice(index + 1)]);
    }
  };

  const deleteHandler = (index: number): void => {
    props.deleteLine(props.dataArray[index][0]);
  };

  let mTest = props.dataArray.map((array, i) => {
    return (
      <tr key={i}>
        {array.map((val, j) => {
          if (j === 0) {
            return (
              <td key={j} style={{ width: "5%" }}>
                {val}
              </td>
            );
          } else if (!edited[i]) {
            return (
              <td key={j} style={{ width: 90 / (headArrayLength - 1) + "%" }}>
                {val}
              </td>
            );
          } else {
            return (
              <td
                key={j}
                className={styles.editing}
                style={{
                  width: 90 / (headArrayLength - 1) + "%",
                }}
              >
                <Form.Control size="sm" />
              </td>
            );
          }
        })}
        <td className={styles.actions}>
          <div className={styles.wrapper} onClick={() => editHandler(i)}>
            <img src={Pencil} alt="pencil icon" className={styles.icon} />
          </div>
          <div className={styles.wrapper} onClick={() => deleteHandler(i)}>
            <img src={Trash} alt="trash icon" className={styles.icon} />
          </div>
        </td>
      </tr>
    );
  });

  console.log(mTest);

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
        <tbody>{mTest}</tbody>
      </Table>
    </div>
  );
};

export default GenericTable;

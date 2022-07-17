import React, { useState, useInsertionEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import Pencil from "../../assets/pencil-fill.svg";
import Trash from "../../assets/trash-fill.svg";
import styles from "./GenericTable.module.css";

type PrivateProps = {
  headArray: string[];
  dataArray: (string | number)[][];
  editLine: (index: any, newLine: (string | number)[]) => void;
  deleteLine: (val: string | number) => void;
};

const GenericTable = (props: PrivateProps) => {
  const [edited, setEdited] = useState<boolean[]>(
    props.dataArray.map((el) => false)
  );
  const [editTempData, setEditTempData] = useState<(string | number)[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const headArrayLength: number = props.headArray.length;

  useInsertionEffect(() => {
    console.log(editTempData);
  }, [editTempData]);

  const isEditing = (boolArr: boolean[]) => {
    let isEditing: boolean = false;
    let index: number = 0;
    boolArr.forEach((el, i) => {
      if (el) {
        isEditing = true;
        index = i;
        return;
      }
    });
    return [isEditing, index];
  };

  const editHandler = (index: number): void => {
    const [currentEditing, editingIndex] = isEditing(edited);
    if (currentEditing && editingIndex !== index) {
      setToastMessage("Only one line can be edited at a time.");
      setShow(true);
      return;
    }

    if (edited[index]) {
      setEdited([...edited.slice(0, index), false, ...edited.slice(index + 1)]);
      props.editLine(index, editTempData);

      //TODO pencil icon to save
    } else {
      setEdited([...edited.slice(0, index), true, ...edited.slice(index + 1)]);

      //TODO save icon to pencil
    }

    let tempArr: any = [];
    tempArr = props.dataArray[index].slice(1);

    setEditTempData([...tempArr]);
  };

  const deleteHandler = (index: number): void => {
    if (isEditing(edited)[0]) {
      setToastMessage("Finish editing before trying to remove.");
      setShow(true);
      return;
    }
    props.deleteLine(props.dataArray[index][0]);
  };

  const typeHandler = (event: any, i: number, j: number): void => {
    event.preventDefault();
    setEditTempData([
      ...editTempData.slice(0, j),
      event.target.value,
      ...editTempData.slice(j + 1),
    ]);
  };

  let tableBody = props.dataArray.map((array, i) => {
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
                <Form.Control
                  size="sm"
                  defaultValue={editTempData[j - 1]}
                  onChange={(event) => typeHandler(event, i, j - 1)}
                />
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

  let toast = (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      bg="danger"
      style={{ position: "absolute" }}
    >
      <Toast.Header>
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
  );

  return (
    <div className={styles.main}>
      {toast}
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.headArray?.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </Table>
    </div>
  );
};

export default GenericTable;

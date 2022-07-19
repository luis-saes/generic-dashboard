import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import Pencil from "../../assets/pencil-fill.svg";
import Trash from "../../assets/trash-fill.svg";
import Check from "../../assets/check-circle-fill.svg";
import Cancel from "../../assets/x-circle-fill.svg";
import styles from "./GenericTable.module.css";

type PrivateProps = {
  headArray: string[];
  dataTypes: string[];
  dataArray: (string | number)[][];
  editLine: (index: any, newLine: (string | number)[]) => void;
  deleteLine: (val: string | number) => void;
  addLine: (val: (string | number)[]) => void;
};

const GenericTable = (props: PrivateProps) => {
  const [edited, setEdited] = useState<boolean[]>(
    props.dataArray.map((el) => false)
  );
  const [editTempData, setEditTempData] = useState<(string | number)[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [addingNewLine, setAddingNewLine] = useState<boolean>(false);
  const [validatedData, setValidatedData] = useState<boolean[]>(
    props.headArray.slice(1).map((el) => false)
  );

  useEffect(() => {
    console.log(0);
  }, [validatedData]);

  const headArrayLength: number = props.headArray.length;

  const anyFalse = (boolArr: boolean[]) => {
    let anyFalse: boolean = false;
    let index: number = 0;
    boolArr.forEach((el, i) => {
      if (el) {
        anyFalse = true;
        index = i;
        return;
      }
    });
    return [anyFalse, index];
  };

  const anyEmpty = (tempData: (string | number)[]): boolean => {
    let anyEmpty = false;
    tempData.forEach((el) => {
      if (!el) {
        anyEmpty = true;
      }
    });

    return anyEmpty;
  };

  const validation = (arr: (string | number)[], types: string[]) => {
    props.headArray.slice(1).forEach((el, i) => {
      if (!arr[i]) {
        setValidatedData([
          ...validatedData.slice(0, i),
          true,
          ...validatedData.slice(i + 1),
        ]);
      } else if (types[i] === "string") {
        if (typeof arr[i] === "string") {
          setValidatedData([
            ...validatedData.slice(0, i),
            false,
            ...validatedData.slice(i + 1),
          ]);
        } else {
          setValidatedData([
            ...validatedData.slice(0, i),
            true,
            ...validatedData.slice(i + 1),
          ]);
        }
      } else if (types[i] === "number") {
        if (typeof Number(arr[i]) === "number") {
          setValidatedData([
            ...validatedData.slice(0, i),
            false,
            ...validatedData.slice(i + 1),
          ]);
        } else {
          setValidatedData([
            ...validatedData.slice(0, i),
            true,
            ...validatedData.slice(i + 1),
          ]);
        }
      }
    });

    setValidatedData((state) => {
      console.log(state); // "React is awesome!"

      return state;
    });
    console.log(validatedData);
  };

  const editHandler = (index: number): void => {
    //TODO: add validation
    const [currentEditing, editingIndex] = anyFalse(edited);
    if (currentEditing && editingIndex !== index) {
      setToastMessage("Only one line can be edited at a time.");
      setShow(true);
      return;
    } else if (addingNewLine) {
      setToastMessage("Only one line can be changed at a time.");
      setShow(true);
      return;
    }

    if (edited[index]) {
      setEdited([...edited.slice(0, index), false, ...edited.slice(index + 1)]);
      props.editLine(index, editTempData);
    } else {
      setEdited([...edited.slice(0, index), true, ...edited.slice(index + 1)]);
    }

    let tempArr: any = [];
    tempArr = props.dataArray[index].slice(1);

    setEditTempData([...tempArr]);
  };

  const deleteHandler = (index: number): void => {
    if (anyFalse(edited)[0]) {
      setToastMessage("Finish editing before trying to remove.");
      setShow(true);
      return;
    } else if (addingNewLine) {
      setToastMessage("Finish adding new line before trying to remove.");
      setShow(true);
      return;
    }
    props.deleteLine(props.dataArray[index][0]);
  };

  const typeHandler = (event: any, index: number): void => {
    event.preventDefault();
    setEditTempData([
      ...editTempData.slice(0, index),
      event.target.value,
      ...editTempData.slice(index + 1),
    ]);
  };

  const addNewLineHandler = () => {
    setEditTempData(props.headArray.slice(1).map((el) => ""));
    setAddingNewLine(!addingNewLine);
  };

  const addSaveHandler = () => {
    validation(editTempData, props.dataTypes.slice(1));
    if (anyFalse(validatedData)[0] || anyEmpty(editTempData)) {
      console.log("Fail!!");
      return;
    } else {
      console.log("Success!!");
    }
    setAddingNewLine(false);
    props.addLine([
      Number(props.dataArray?.at(-1)?.at(0)) + 1,
      ...editTempData,
    ]);
  };

  const changePencil = (index: number): boolean => {
    const [currentEditing, editingIndex] = anyFalse(edited);
    if (currentEditing && editingIndex === index) return true;
    return false;
  };

  const newLine = (
    <tr>
      {props.headArray.map((val, i) => {
        if (i === 0) {
          return (
            <td key={i + props.dataArray.length} style={{ width: "5%" }}>
              {Number(props.dataArray?.at(-1)?.at(0)) + 1}
            </td>
          );
        } else {
          return (
            <td
              key={i + props.dataArray.length}
              className={styles.editing}
              style={{
                width: 90 / (headArrayLength - 1) + "%",
              }}
            >
              <Form.Control
                type={props.dataTypes[i]}
                size="sm"
                isInvalid={validatedData[i] ? false : true}
                defaultValue={editTempData[i - 1]}
                onChange={(event) => typeHandler(event, i - 1)}
              />
            </td>
          );
        }
      })}
      <td className={styles.actions}>
        <div className={styles.wrapper} onClick={addSaveHandler}>
          <img src={Check} alt="check icon" className={styles.icon} />
        </div>
        <div className={styles.wrapper} onClick={addNewLineHandler}>
          <img src={Cancel} alt="cancel icon" className={styles.icon} />
        </div>
      </td>
    </tr>
  );

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
                  onChange={(event) => typeHandler(event, j - 1)}
                />
              </td>
            );
          }
        })}
        <td className={styles.actions}>
          <div className={styles.wrapper} onClick={() => editHandler(i)}>
            {changePencil(i) ? (
              <img src={Check} alt="check icon" className={styles.icon} />
            ) : (
              <img src={Pencil} alt="pencil icon" className={styles.icon} />
            )}
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
      <div className={styles.tableHeader}>
        <div className={styles.title}>Products</div>
        <Button
          variant={`${addingNewLine ? "danger" : "success"}`}
          size="sm"
          onClick={addNewLineHandler}
          className={styles.addButton}
        >
          {`${addingNewLine ? "Cancel" : "+ Add New Product"}`}
        </Button>
      </div>
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
          {tableBody}
          {addingNewLine ? newLine : null}
        </tbody>
      </Table>
    </div>
  );
};

export default GenericTable;

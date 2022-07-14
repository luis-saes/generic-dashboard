import React from "react";
import Table from "react-bootstrap/Table";
import styles from "./GenericTable.module.css";

type PrivateProps = {
  headArray?: string[];
  dataArray?: (string | number)[][];
};

const GenericTable = (props: PrivateProps) => {
  console.log(props.headArray);
  console.log(props.dataArray);

  return (
    <div className={styles.main}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.headArray?.map((val) => (
              <th>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.dataArray?.map((array) => {
            return (
              <tr>
                {array?.map((val) => {
                  return <td>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default GenericTable;

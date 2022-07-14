import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideButton.module.css";

type PrivateProps = {
  text: string;
  active?: boolean;
  link: string;
};

const SideButton = (props: PrivateProps) => {
  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.main}>
        <div
          className={`${styles.sideButton} ${
            props.active ? styles.active : styles.notActive
          }`}
        >
          {props.text}
        </div>
        <div
          className={`${styles.underline} ${
            props.active ? styles.active : styles.notActive
          }`}
        />
      </div>
    </Link>
  );
};

export default SideButton;

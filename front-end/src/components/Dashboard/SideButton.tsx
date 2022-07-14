import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./SideButton.module.css";

type PrivateProps = {
  text: string;
  link: string;
};

const SideButton = (props: PrivateProps) => {
  const location = useLocation();
  const pathname: string = location.pathname;

  return (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      <div className={styles.main}>
        <div
          className={`${styles.sideButton} ${
            pathname === props.link ? styles.active : styles.notActive
          }`}
        >
          {props.text}
        </div>
        <div
          className={`${styles.underline} ${
            pathname === props.link ? styles.active : styles.notActive
          }`}
        />
      </div>
    </Link>
  );
};

export default SideButton;

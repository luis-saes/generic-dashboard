import React from "react";
import styles from "./SideButton.module.css";

type PrivateProps = {
  text: string;
  active?: boolean;
};

const SideButton = (props: PrivateProps) => {
  // console.log(props.active);

  return (
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
  );
};

export default SideButton;

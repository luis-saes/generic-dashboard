import React from "react";
import Modal from "../components/login/Modal";
import styles from "./LoginScreen.module.css";

const LoginScreen = () => {
  return (
    <div className={styles.screenBackground}>
      <Modal />
    </div>
  );
};

export default LoginScreen;

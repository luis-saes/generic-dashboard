import React from "react";
import styles from "./Sidebar.module.css";
import SideButton from "./SideButton";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SideButton text={"Home"} active={true} />
      <SideButton text={"Product"} />
      <SideButton text={"Clients"} />
      <SideButton text={"Employees"} />
      <SideButton text={"Sales"} />
    </div>
  );
};

export default Sidebar;

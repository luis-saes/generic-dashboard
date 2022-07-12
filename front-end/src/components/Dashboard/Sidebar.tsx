import React from "react";
import styles from "./Sidebar.module.css";
import SideButton from "./SideButton";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.title} mt-3`}>Generic Dashboard</div>
      <div className={`${styles.sideButtons} mt-4`}>
        <SideButton text={"Home"} active={true} />
        <SideButton text={"Product"} />
        <SideButton text={"Clients"} />
        <SideButton text={"Employees"} />
        <SideButton text={"Sales"} />
      </div>
    </div>
  );
};

export default Sidebar;

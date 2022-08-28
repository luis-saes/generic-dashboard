import React from "react";
import SideButton from "./SideButton";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.title} mt-3`}>Generic Dashboard</div>
      <div className={`${styles.sideButtons} mt-4`}>
        <SideButton text="Home" link="/dashboard" />
        <SideButton text="Products" link="/products" />
        <SideButton text="Clients" link="/clients" />
        <SideButton text="Employees" link="/employees" />
        <SideButton text="Sales" link="/sales" />
      </div>
    </div>
  );
};

export default Sidebar;

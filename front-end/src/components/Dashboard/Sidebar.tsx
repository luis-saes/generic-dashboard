import React from "react";
import styles from "./Sidebar.module.css";
import SideButton from "./SideButton";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.title} mt-3`}>Generic Dashboard</div>
      <div className={`${styles.sideButtons} mt-4`}>
        <SideButton text="Home" link="/dashboard" active={true} />
        <SideButton text="Products" link="/products" />
        <SideButton text="Clients" link="/clients" />
        <SideButton text="Employees" link="/employees" />
        <SideButton text="Sales" link="/sales" />
      </div>
    </div>
  );
};

export default Sidebar;

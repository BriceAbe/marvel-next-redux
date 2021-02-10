import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMiddle}>
        <div className={styles.containerLogo}></div>
      </div>

      <div className={styles.containerPage}>
        <h1 className={styles.page}>characters</h1>
        <h1 className={styles.page}>comics</h1>
        <h1 className={styles.page}>favoris</h1>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import styles from "../styles/Banner.module.css";
const Banner = ({ image, info }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoLeft}>
        <div className={styles.containerTitle}>
          <p className={styles.title}>{info.name}</p>
          <p className={styles.description}>{info.description}</p>
        </div>
      </div>
      <div className={styles.infoRigth}>
        <div className={styles.mask}></div>
        <img className={styles.image} src={image} alt="heros" />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import styles from "../styles/Banner.module.css";
const Banner = ({ image, info }) => {
  console.log(info);
  return (
    <div className={styles.container}>
      <div className={styles.infoLeft}> {info.name}</div>
      <div className={styles.infoRigth}>
        <div className={styles.mask}></div>
        <img className={styles.image} src={image} alt="heros" />
      </div>
    </div>
  );
};

export default Banner;

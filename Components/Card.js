import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ data }) => {
  const image = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="heros" />
      <div className={styles.layer}></div>
      <div className={styles.infoName}>{data.name}</div>

      <div className={styles.triangleCode}></div>
    </div>
  );
};

export default Card;

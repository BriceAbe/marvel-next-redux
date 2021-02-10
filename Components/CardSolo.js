import React from "react";
import styles from "../styles/Card.module.css";

const CardSolo = ({ data }) => {
  const image = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image}
        alt={data.title ? data.title : data.name}
      />
      <div className={styles.layer}></div>
      <div className={styles.infoName}>
        {data.title ? data.title : data.name}
      </div>

      <div className={styles.triangleCode}></div>
    </div>
  );
};

export default CardSolo;

import React from "react";
import styles from "../styles/Card.module.css";

const Card = ({ data, historyCharacter }) => {
  const image = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div className={styles.container} onClick={() => historyCharacter(data.id)}>
      <img className={styles.image} src={image} alt="heros" />
      <div className={styles.layer}></div>
      <div className={styles.infoName}>
        {data.name ? data.name : data.title}
      </div>

      <div className={styles.triangleCode}></div>
    </div>
  );
};

export default Card;

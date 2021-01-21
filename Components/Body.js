import React from "react";
import styles from "../styles/Body.module.css";
import Card from "./Card";

const Body = ({ data }) => {
  const tabData = data.data.results;
  //   const image =
  //     data.data.results[random].thumbnail.path +
  //     "." +
  //     data.data.results[random].thumbnail.extension;
  return (
    <div className={styles.container}>
      <div className={styles.bodyCard}>
        {tabData.map((elem, index) => (
          <Card key={index} data={elem} />
        ))}
      </div>
    </div>
  );
};

export default Body;

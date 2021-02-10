import React from "react";
import styles from "../styles/Body.module.css";
import Card from "./Card";
import Link from "next/link";
import { useDispatch } from "react-redux";

const Body = ({ data, historyCharacter }) => {
  const tabData = data.data.results;
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.bodyCard}>
        {tabData.map((elem, index) => (
          <div
            onClick={() =>
              dispatch({ type: "GET_DATA_CHARACTER", payload: elem })
            }
          >
            <Card key={index} data={elem} historyCharacter={historyCharacter} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;

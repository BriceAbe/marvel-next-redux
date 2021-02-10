import React from "react";
import styles from "../styles/Body.module.css";
import CardSolo from "./CardSolo";
import Link from "next/link";
import { useDispatch } from "react-redux";

const BodySolo = ({ data }) => {
  // const comics = data.comics.items;

  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.bodyCard}>
        {data.map((elem, index) => (
          <div
            onClick={() =>
              dispatch({ type: "GET_DATA_CHARACTER", payload: elem })
            }
          >
            <CardSolo key={elem.id} data={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodySolo;

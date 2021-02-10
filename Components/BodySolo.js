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
        <button
          onClick={() =>
            dispatch({
              type: "vente_chemise_one",
              payload: { forOne: 1, forFive: 5 },
            })
          }
        >
          ACHETER CHEMISE par un
        </button>

        <button
          onClick={() =>
            dispatch({
              type: "vente_chemise_five",
              payload: { forOne: 1, forFive: 5 },
            })
          }
        >
          ACHETER CHEMISE par 5
        </button>
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

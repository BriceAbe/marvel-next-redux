import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/Paginate.module.css";
import ReactPaginate from "react-paginate-next";

const Paginate = ({ history, total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBody}>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={total}
          pageRangeDisplayed={9}
          marginPagesDisplayed={1}
          onPageChange={(e) => history(e.selected)}
          containerClassName={"pagination"}
          pageClassName={"paginateli"}
        />
      </div>
    </div>
  );
};

export default Paginate;

import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ReactPaginate from "react-paginate-next";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Body from "../Components/Body";

export default function Home({ data }) {
  const image =
    data.data.results[21].thumbnail.path +
    "." +
    data.data.results[20].thumbnail.extension;
  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>

      <Header />
      <Banner image={image} info={data.data.results[20]} />

      <Body />
      <div>
        {/* <Link href="/contact">
          <button> contact</button>
        </Link> */}

        {/* <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={60}
          pageRangeDisplayed={9}
          marginPagesDisplayed={1}
          onPageChange={(e) => console.log(e.selected)}
          containerClassName={"pagination"}
          pageClassName={"paginateli"}
          // activeClassName={"active"}
        /> */}
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/allcharacters",
    {
      limit: 100,
      offset: 100,
    }
  );
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

import React from "react";

import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import BodySolo from "../../Components/BodySolo";

const comic = ({ data, dataCharacter }) => {
  const donnees = data.data.results[0];
  const character = dataCharacter.data.results;

  const image = donnees.thumbnail.path + "." + donnees.thumbnail.extension;

  return (
    <>
      <Head>
        <title></title>
      </Head>

      <Header />
      <Banner image={image} info={donnees} />

      <BodySolo data={character} />
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.comic;

  const { data } = await axios.post(
    `https://marvel-backendbybrice.herokuapp.com/comics/`,
    {
      id: id,
    }
  );

  const data2 = await axios.post(
    `https://marvel-backendbybrice.herokuapp.com/comics/character`,
    {
      id: id,
    }
  );

  const dataCharacter = data2.data;
  return {
    props: { data, dataCharacter },
  };
}
export default comic;

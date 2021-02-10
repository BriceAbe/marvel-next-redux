import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Header from "../../Components/Header";
import BodySolo from "../../Components/BodySolo";
import Banner from "../../Components/Banner";

const character = ({ data }) => {
  const donnees = data.data.results;
  const dataCharacter = useSelector((state) => state.dataCharacter);

  const x = useSelector((state) => state);
  console.log(dataCharacter);
  console.log(x);

  const image =
    dataCharacter.thumbnail.path + "." + dataCharacter.thumbnail.extension;

  const historyCharacter = (id) => {
    router.push("/character/[character]", `/character/${id}`);
  };
  return (
    <>
      <Head>
        <title>{dataCharacter.name}</title>
      </Head>

      <Header />
      <Banner image={image} info={dataCharacter} />

      <BodySolo data={donnees} />
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.character;
  const name = context.query.name;
  const { data } = await axios.post(
    `https://marvel-backendbybrice.herokuapp.com/character/`,
    {
      id: id,
    }
  );

  return {
    props: { data },
  };
}

export default character;

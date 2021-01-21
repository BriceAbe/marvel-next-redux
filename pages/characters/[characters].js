import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../Components/Header";

import Body from "../../Components/Body";
import Paginate from "../../Components/Paginate";
import Banner from "../../Components/Banner";

const characters = ({ data, random }) => {
  const router = useRouter();

  const image =
    data.data.results[random].thumbnail.path +
    "." +
    data.data.results[random].thumbnail.extension;
  const history = (e) => {
    router.push("/characters/[characters]", `/characters/${e}`);
  };
  const historyCharacter = (id) => {
    router.push("/character/[character]", `/character/${id}`);
  };

  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>

      <Header />
      <Banner image={image} info={data.data.results[random]} />

      <Paginate history={history} />

      <Body data={data} historyCharacter={historyCharacter} />
    </>
  );
};

export async function getServerSideProps(context) {
  function getRandomArbitrary(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }
  const random = getRandomArbitrary(0, 99);
  const offset = context.query.characters * 100;
  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/allcharacters",
    {
      limit: 100,
      offset: offset,
    }
  );

  return {
    props: {
      data,
      random,
    },
  };
}

export default characters;

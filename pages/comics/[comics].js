import React from "react";
import axios from "axios";
import Head from "next/head";

import { useRouter } from "next/router";

import Header from "../../Components/Header";

import Body from "../../Components/Body";
import Paginate from "../../Components/Paginate";
import Banner from "../../Components/Banner";

const comics = ({ data, random }) => {
  const router = useRouter();
  // const total = (data.data.total / 100).toFixed();
  // const donnees = data.data.results;

  // const history = (e) => {
  //   router.push("/comic/[comic]", `/comic/${e}`);
  // };

  const image =
    data.data.results[random].thumbnail.path +
    "." +
    data.data.results[random].thumbnail.extension;
  const history = (e) => {
    router.push("/comics/[comics]", `/comics/${e}`);
  };
  const historyCharacter = (id) => {
    router.push("/comic/[comic]", `/comic/${id}`);
  };
  return (
    <>
      <Head>
        <title>Comics</title>
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
  const offset = context.query.comics * 100;
  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/comicsPage",
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

export default comics;

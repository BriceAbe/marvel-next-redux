import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../../Components/Header";

import Body from "../../Components/Body";
import Paginate from "../../Components/Paginate";
import Banner from "../../Components/Banner";

const index = ({ data, random }) => {
  const total = (data.data.total / 100).toFixed();
  const image =
    data.data.results[random].thumbnail.path +
    "." +
    data.data.results[random].thumbnail.extension;
  const router = useRouter();
  console.log(data);
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

      <Paginate history={history} total={total} />

      <Body data={data} historyCharacter={historyCharacter} />
      <div></div>
    </>
  );
};

export async function getServerSideProps(context) {
  function getRandomArbitrary(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }
  const random = getRandomArbitrary(0, 99);
  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/comicsPage",
    {
      limit: 100,
      offset: 0,
    }
  );
  return {
    props: {
      data,
      random,
    },
  };
}

export default index;

import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Body from "../Components/Body";
import Paginate from "../Components/Paginate";

import { useRouter } from "next/router";
export default function Home({ data, random }) {
  const total = (data.data.total / 100).toFixed();

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

      <Paginate history={history} total={total} />

      <Body data={data} historyCharacter={historyCharacter} />
      <div></div>
    </>
  );
}
export async function getServerSideProps(context) {
  function getRandomArbitrary(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }
  const random = getRandomArbitrary(0, 99);

  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/allcharacters",
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

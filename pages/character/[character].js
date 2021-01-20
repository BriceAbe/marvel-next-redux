import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";

const character = ({ data }) => {
  const donnees = data.data.results;
  return (
    <div>
      <ul>
        {donnees.map((elem) => (
          <li>{elem.title}</li>
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.character;
  const { data } = await axios.post(
    `https://marvel-backendbybrice.herokuapp.com/character/`,
    {
      id: id,
    }
  );

  return {
    props: {
      data,
    },
  };
}

export default character;

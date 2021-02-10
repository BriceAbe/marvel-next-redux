import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";

const comics = ({ data, random }) => {
  const router = useRouter();
  const total = (data.data.total / 100).toFixed();
  const donnees = data.data.results;

  const history = (e) => {
    router.push("/comic/[comic]", `/comic/${e}`);
  };
  return (
    <div>
      <ul>
        {donnees.map((elem) => (
          <li>{elem.title}</li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={total}
        pageRangeDisplayed={9}
        marginPagesDisplayed={1}
        onPageChange={(e) => history(e.selected)}
        containerClassName={"pagination"}
        pageClassName={"paginateli"}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  function getRandomArbitrary(min, max) {
    return Number((Math.random() * (max - min) + min).toFixed(0));
  }
  const random = getRandomArbitrary(0, 99);
  const offset = context.query.characters * 100;
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

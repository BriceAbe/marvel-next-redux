import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";

const characters = ({ data }) => {
  const router = useRouter();
  const donnees = data.data.results;

  const history = (e) => {
    router.push("/characters/[characters]", `/characters/${e}`);
  };
  return (
    <div>
      <ul>
        {donnees.map((elem) => (
          <li>
            {elem.name} <p>{elem.id}</p>
          </li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={60}
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
    },
  };
}

export default characters;

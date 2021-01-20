import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import { useRouter } from "next/router";

const comics = ({ data }) => {
  const router = useRouter();
  const total = (data.data.total / 100).toFixed();
  const donnees = data.data.results;

  const history = (e) => {
    router.push("/comics/[comics]", `/comics/${e}`);
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
    },
  };
}

export default comics;

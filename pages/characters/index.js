import React, { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate-next";
import Link from "next/link";
import { useRouter } from "next/router";

const index = ({ data }) => {
  const [offset, setoffset] = useState(0);
  const donnees = data.data.results;
  const router = useRouter();

  const history = (e) => {
    router.push("/characters/[characters]", `/characters/${e}`);
  };

  const historyCharacter = (id) => {
    router.push("/character/[character]", `/character/${id}`);
  };
  return (
    <div>
      <ul>
        {donnees.map((elem) => (
          <>
            {/* <Link href="/character/[character]" as={`/character/${elem.id}`}> */}
            <li onClick={() => historyCharacter(elem.id)}>{elem.name}</li>
            {/* </Link> */}
          </>
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
  const { data } = await axios.post(
    "https://marvel-backendbybrice.herokuapp.com/allcharacters",
    {
      limit: 100,
      offset: 100,
    }
  );

  return {
    props: {
      data,
    },
  };
}

export default index;

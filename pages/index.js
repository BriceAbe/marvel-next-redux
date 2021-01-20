import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ReactPaginate from "react-paginate-next";

export default function Home() {
  return (
    <>
      <Head>
        <title>coucou</title>
      </Head>
      <div className={styles.container}>
        <h1>home</h1>
        <Link href="/contact">
          <button> contact</button>
        </Link>

        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={60}
          pageRangeDisplayed={9}
          marginPagesDisplayed={1}
          onPageChange={(e) => console.log(e.selected)}
          containerClassName={"pagination"}
          pageClassName={"paginateli"}
          // activeClassName={"active"}
        />
      </div>
    </>
  );
}

import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.containerMiddle}>
        <div className={styles.containerLogo}></div>
      </div>

      <div className={styles.containerPage}>
        <h1 className={styles.page} onClick={() => router.push("/")}>
          characters
        </h1>
        <h1 className={styles.page} onClick={() => router.push("/comics/")}>
          comics
        </h1>
        <h1
          className={styles.page}
          onClick={() => router.push("/favoris/favoris")}
        >
          favoris
        </h1>
      </div>
    </div>
  );
};

export default Header;

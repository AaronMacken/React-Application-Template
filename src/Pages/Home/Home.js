import React from "react";
import styles from "./Home.scss";
import logo from "./logo.png";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Sample home page</h1>
      <img className={styles.sampleImg} src={logo} />
    </div>
  );
}

import React from "react";
import styles from "./App.scss";

import MainRouter from "../Components/MainRouter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;

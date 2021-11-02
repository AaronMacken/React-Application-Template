import React from "react";
import styles from "./App.scss";

import MainRouter from "../Components/MainRouter";

const App = () => {
  return (
    <div className={styles.app}>
      <MainRouter />
    </div>
  );
};

export default App;

import React, { Component } from "react";
import styles from "./Home.scss";
import logo from "./logo.png";

import rootStore from "data/stores";

export default class Home extends Component {
  constructor(props) {
    super(props);

    Object.assign(this, { rootStore });
  }

  render() {
    console.log("stores?", this.rootStore);

    return (
      <div>
        <h1 className={styles.title}>Sample home page</h1>
        <img className={styles.sampleImg} src={logo} />
      </div>
    );
  }
}

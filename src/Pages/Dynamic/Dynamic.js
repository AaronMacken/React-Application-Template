import React, { Component } from "react";

export default class Dynamic extends Component {
  componentDidMount() {
    console.log("mounted!", this.props);
  }

  render() {
    return <div>Dynamic Page: {this.props.match.params.id} </div>;
  }
}

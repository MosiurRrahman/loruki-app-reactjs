import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePage from "../pages/home/HomePage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    );
  }
}

export default Main;

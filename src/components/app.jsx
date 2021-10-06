import { Component } from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default Layout;

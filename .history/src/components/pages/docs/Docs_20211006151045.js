import React, { Component } from "react";
import CardLeft from "./CardLeft";
import DocsHead from "./DocsHead";
class Docs extends Component {
  render() {
    return (
      <>
      <DocsHead/>
      <section className="docs-main my-4">
          <div className="container grid">
              <CardLeft/>
          </div>
      </section>
      </>
    );
  }
}

export default Docs;

import React, { Component } from "react";

class DocsHead extends Component {
  render() {
    return (
      <>
        <section className="docs-head bg-primary py-3">
          <div className="container grid">
            <div>
              <h1 className="xl">Docs</h1>
              <p className="lead">Learn how to work with the Loruki platform</p>
            </div>
            {/* <img src={IMAGES.docs} alt="doct photo" /> */}
          </div>
        </section>
      </>
    );
  }
}

export default DocsHead;

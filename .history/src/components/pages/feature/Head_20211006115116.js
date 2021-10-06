import React, { Component } from "react";

class Head extends Component {
  render() {
    return (
      <>
        <section className="features-head bg-primary py-3">
          <div className="container grid">
            <div>
              <h1 className="xl">Features</h1>
              <p className="lead">
                Check out the features of Loruki that separate is form the
                competition
              </p>
            </div>
            <img src="images/server.png" alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Head;

import React, { Component } from "react";
import image from "../../../assets/images/cloud.png";

class Cloud extends Component {
  render() {
    return (
      <>
        <section className="cloud bg-primary my-2 py-2">
          <div className="container grid">
            <div className="text-center">
              <h2 className="lg">Extreme Cloud Hosting</h2>
              <p className="lead my-1">
                Cloud hostnig like you're never seen, Fast, Effecient and
                scalable
              </p>
              <a href="feature.html" className="btn btn-dark">
                Read More
              </a>
            </div>
            <img src={image} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Cloud;

import React, { Component } from "react";
import image from "../../../assets/images/cloud.png";

class Cloud extends Component {
  render() {
    return (
      <>
        <section class="cloud bg-primary my-2 py-2">
          <div class="container grid">
            <div class="text-center">
              <h2 class="lg">Extreme Cloud Hosting</h2>
              <p class="lead my-1">
                Cloud hostnig like you're never seen, Fast, Effecient and
                scalable
              </p>
              <a href="feature.html" class="btn btn-dark">
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

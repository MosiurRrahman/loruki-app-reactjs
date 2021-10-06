import React, { Component } from "react";
import image from '../../../assets/images/cli';

class Cli extends Component {
  render() {
    return (
      <>
        <section class="cli">
          <div class="container grid">
            <img src={image} alt="Cli images" />
            <div class="card">
              <h3>Easy to use, platform CLI</h3>
            </div>
            <div class="card">
              <h3>Deploy in seconds</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cli;

import React, { Component } from "react";
import image from '../../../assets/images/inst.png';

class Cli extends Component {
  render() {
    return (
      <>
        <section className="cli">
          <div className="container grid">
            <img src={image} alt="Cli images" />
            <div className="card">
              <h3>Easy to use, platform CLI</h3>
            </div>
            <div className="card">
              <h3>Deploy in seconds</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cli;

import React, { Component } from "react";
import IMAGES from '../../../assets/images/images';

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
            <img src={IMAGES.server}alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Head;

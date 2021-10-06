import React, { Component } from "react";
import IMAGES from '../../../assets/images/images';
class Docs extends Component {
  render() {
    return (
      <>
        <section class="docs-head bg-primary py-3">
          <div class="container grid">
            <div>
              <h1 class="xl">Docs</h1>
              <p class="lead">Learn how to work with the Loruki platform</p>
            </div>
            <img src={IMAGES.docs} alt="doct photo" />
          </div>
        </section>
      </>
    );
  }
}

export default Docs;

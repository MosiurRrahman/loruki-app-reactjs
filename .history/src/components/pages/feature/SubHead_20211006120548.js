import React, { Component } from "react";
import IMAGES from '../../../assets/images/images';

class SubHead extends Component {
  render() {
    return (
      <>
        <section className="features-sub-head bg-light py-3">
          <div className="container grid">
            <div>
              <h1 className="md">The Loruki Platform</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ut
                quam delectus tempora aut quis ullam, vitae porro, commodi neque
                dicta unde nesciunt fugit enim aspernatur assumenda at inventore
                dolorum.
              </p>
            </div>
            <img src={IMAGES.server2} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default SubHead;

import React, { Component } from "react";

class CardRigth extends Component {
  render() {
    return (
      <>
        <div className="card">
          <h2>Introduction</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            exercitationem sint ipsum facilis dolores earum! Dolore consectetur
            nihil in nobis deleniti unde cupiditate veritatis perspiciatis,
            omnis sunt quibusdam excepturi aliquid.
          </p>
          <div className="alert alert-success">
            <i className="fas fa-info"></i> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Non
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat
            neque maiores dolorum omnis atque architecto praesentium voluptate
            assumenda temporibus.
          </p>
          <a href="#" className="btn btn-primary">
            Install-cli
          </a>

          <h3>Requirements</h3>
          <ul>
            <li>Windows 10, Mac OSX, Linus</li>
            <li>Node.js v12 or higher</li>
          </ul>
          <h3>Install</h3>
          <p>Mac (HomeBreq)</p>
          <pre>
            <code>$ brew install loruku-cli</code>
          </pre>
          <p>NPM</p>
          <pre>
            <code>$ npm install loruku-cli</code>
          </pre>
          <p>Yarn</p>
          <pre>
            <code>$ yarn install loruku-cli</code>
          </pre>
        </div>
      </>
    );
  }
}

export default CardRigth;

import React, { Component } from "react";

class CardLeft extends Component {
  render() {
    return (
      <>
        <div className="card bg-light p-3">
          <h3 className="my-2">Esentials</h3>
          <nav>
            <ul>
              <li>
                <a href="#">Introduction</a>
              </li>
              <li>
                <a href="#">About Loruki</a>
              </li>
              <li>
                <a href="#">Installation</a>
              </li>
            </ul>
          </nav>
          <h3 className="my-2">Deployment</h3>
          <nav>
            <ul>
              <li>
                <a href="#">Setting up a container</a>
              </li>
              <li>
                <a href="#">Using the CLI</a>
              </li>
              <li>
                <a href="#">Managing resources</a>
              </li>
              <li>
                <a href="#">Upgrade and downgrade</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default CardLeft;

import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="container flex">
            <h1 className="logo">Loruki</h1>
            <nav>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="feature.html">Feature</a>
                </li>
                <li>
                  <a href="docs.html">Docs</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
export default Header;

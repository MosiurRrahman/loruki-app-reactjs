import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div class="navbar">
          <div class="container flex">
            <h1 class="logo">Loruki</h1>
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

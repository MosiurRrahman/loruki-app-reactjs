import { Component } from "react";
import { Link } from "react-router-dom";

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
                  {/* <a href="index.html">Home</a> */}
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/feature">Feature</Link>
                </li>
                <li>
                  <a href="/docs">Docs</a>
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

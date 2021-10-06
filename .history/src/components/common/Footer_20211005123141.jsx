import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer bg-dark py-5">
          <div className="container grid grid-3">
            <div>
              <h1>Loruki</h1>
              <p>CopyRigth &copy; 2020</p>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="feature.html">Features</a>
                </li>
                <li>
                  <a href="docs.html">Docs</a>
                </li>
              </ul>
            </nav>
            <div className="social">
              <a href="#">
                <li className="fa-2x">
                  <FontAwesomeIcon icon={faGithub} />
                </li>
              </a>
              <a href="#">
                <li className="fa-2x">
                  <FontAwesomeIcon icon={faFacebook} />
                </li>
              </a>
              <a href="#">
                <li className="fa-2x">
                  <FontAwesomeIcon icon={faInstagram} />
                </li>
              </a>
              <a href="#">
                <li className=" fa-2x">
                  <FontAwesomeIcon icon={faLinkedin} />
                </li>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;

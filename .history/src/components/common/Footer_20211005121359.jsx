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
        <footer class="footer bg-dark py-5">
          <div class="container grid grid-3">
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
            <div class="social">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;

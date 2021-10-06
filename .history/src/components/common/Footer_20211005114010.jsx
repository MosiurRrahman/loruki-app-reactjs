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
                <li class="fab fa-github fa-2x"></li>
              </a>
              <a href="#">
                <li class="fab fa-facebook fa-2x"></li>
              </a>
              <a href="#">
                <li class="fab fa-instagram fa-2x"></li>
              </a>
              <a href="#">
                <li class="fab fa-linkedin fa-2x"></li>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;

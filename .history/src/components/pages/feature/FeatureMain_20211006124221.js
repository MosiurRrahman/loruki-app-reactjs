import { faDatabase, faLaptop, faLink, faNotesMedical, faPowerOff, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class FeatureMain extends Component {
  render() {
    return (
      <>
        <section className="freatures-main my-2">
          <div className="container grid grid-3">
            <div className="card flex">
              {/* <i class="fas fa-server fa-3x"></i> */}
              <FontAwesomeIcon icon={faServer}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet molestiae esse distinctio laboriosam dolores? Sed
                officiis numquam odit dicta! Reiciendis!
              </p>
            </div>
            <div className="card flex">
              {/* <i class="fas fa-database fa-3x"></i> */}
              <FontAwesomeIcon icon={faDatabase}/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing!</p>
            </div>
            <div className="card flex">
              {/* <i
                class="fas fa-power-off
                 fa-3x"></i> */}
                 <FontAwesomeIcon icon={faPowerOff}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing! Lorem ipsum
                dolor sit amet.
              </p>
            </div>
            <div className="card flex">
              {/* <i
                class="fas fa-laptop-code
                 fa-3x"></i> */}
                 <FontAwesomeIcon icon={faLaptop}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing! Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="card flex">
              {/* <i
                class="fas fa-notes-medical
                 fa-3x"></i> */}
                 <FontAwesomeIcon icon={faNotesMedical}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing! Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="card flex">
              {/* <i
                class="fas fa-link
                 fa-3x"></i> */}
                 <FontAwesomeIcon icon={faLink}/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing! Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FeatureMain;

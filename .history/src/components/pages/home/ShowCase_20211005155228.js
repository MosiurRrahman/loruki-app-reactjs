import React, { Component } from 'react';

class ShowCase extends Component {
    render() {
        return (
           <>
           <section className = "showcase">
               <div className="container grid">
               <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Deploy web apps of all kinds, from large scale enterise APIs to static wbsites for individuals.Flill out the form to try a demo of our platform</p>
                <a href="feature.html" class="btn btn-outline">Read More</a>
            </div>
               </div>
           </section>
           </>
        );
    }
}

export default ShowCase;
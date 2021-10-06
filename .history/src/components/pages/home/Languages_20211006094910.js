import IMAGES from '.assets/images';
import React, { Component } from 'react';
class Languages extends Component {
    render() {
        return (
            <>
               <section class="languages">
        <h2 class="md text-center my-2">Supported Languages</h2>
        <div class="container flex">
            <div class="card">
                <h4>Node.Js</h4>
                <img src={IMAGES.logosClojure} alt="nodejs logo"/>
            </div>
            <div class="card">
                <h4>C#</h4>
                <img src="images/logos/csharp.png" alt="csharp logo"/>
            </div>
            <div class="card">
                <h4>Ruby</h4>
                <img src="images/logos/ruby.png" alt="Ruby logo"/>
            </div>
            <div class="card">
                <h4>PHP</h4>
                <img src="images/logos/php.png" alt="PHP logo"/>
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src="images/logos/python.png" alt="python logo"/>
            </div>
            <div class="card">
                <h4>Scaka</h4>
                <img src="images/logos/scala.png" alt="scala logo"/>
            </div>
            <div class="card">
                <h4>Clojure</h4>
                <img src="images/logos/clojure.png" alt="clojure logo"/>
            </div>
        </div>
    </section>   
            </>
        );
    }
}

export default Languages;
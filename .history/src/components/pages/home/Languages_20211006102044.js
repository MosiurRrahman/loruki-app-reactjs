import React, { Component } from 'react';
import IMAGES from '../../../assets/images/images';
console.log(IMAGES);
class Languages extends Component {
    render() {
        return (
            <>
               <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
            <div className="card">
                <h4>Node.Js</h4>
                <img src={IMAGES.nodeJs} alt="nodejs logo"/>
            </div>
            <div className="card">
                <h4>C#</h4>
                <img src={IMAGES.csharp} alt="csharp logo"/>
            </div>
            <div className="card">
                <h4>Ruby</h4>
                <img src={IMAGES.ruby} alt="Ruby logo"/>
            </div>
            <div className="card">
                <h4>PHP</h4>
                <img src={IMAGES.php} alt="PHP logo"/>
            </div>
            <div className="card">
                <h4>Python</h4>
                <img src={IMAGES.python} alt="python logo"/>
            </div>
            <div className="card">
                <h4>Scaka</h4>
                <img src={IMAGES.scala} alt="scala logo"/>
            </div>
            <div className="card">
                <h4>Clojure</h4>
                <img src={IMAGES.clojure} alt="clojure logo"/>
            </div>
        </div>
    </section>   
            </>
        );
    }
}

export default Languages;
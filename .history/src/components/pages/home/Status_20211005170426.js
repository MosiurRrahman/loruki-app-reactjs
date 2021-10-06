import React, { Component } from 'react';

class Status extends Component {
    render() {
        return (
            <section className="stats">
                <div className="container">
                <h3 className="stats-heading text-center ">
                Welcome to the best platform for building applications of all tyoes with modrn architecture and scaling
            </h3>
            <div className="grid grid-3 text-center my-4">
                <div>
                    <i className="fas fa-server fa-3x"></i>
                    <h3>10,545,405</h3>
                    <p className="text-seconday">Deployment</p>
                </div>
                <div>
                    <i className="fas fa-upload fa-3x"></i>
                    <h3>987 TB</h3>
                    <p className="text-seconday">Published</p>
                </div>
                <div>
                    <i className="fas fa-project-diagram fa-3x"></i>
                    <h3>2,564,4512</h3>
                    <p className="text-seconday">Projects</p>
                </div>
            </div>
                </div>
            </section>
        );
    }
}

export default Status;
import React, { Component } from 'react';
import Cli from './Cli';
import Cloud from './Cloud';
import ShowCase from './ShowCase';
import Status from './Status';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
            <ShowCase/>
            <Status/>
            <Cli/>
            <Cloud/>
            </>
        );
    }
}

export default HomePage;
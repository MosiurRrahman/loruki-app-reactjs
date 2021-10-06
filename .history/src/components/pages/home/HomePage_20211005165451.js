import React, { Component } from 'react';
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
            </>
        );
    }
}

export default HomePage;
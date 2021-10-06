import React, { Component } from 'react';
import ShowCase from './ShowCase';

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
            </>
        );
    }
}

export default HomePage;
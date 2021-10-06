import React, { Component } from 'react';
import FeatureMain from './FeatureMain';
import Head from './Head';
import SubHead from './SubHead';

class Feature extends Component {
    render() {
        return (
            <>
             <Head/>
             <SubHead/>
             <FeatureMain/>
            </>
        );
    }
}

export default Feature;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/app';
import HomePage from './components/pages/home/HomePage';
import './index.css';
// import './utilities';






class Root extends React.Component{
  render(){
    return(
      <BrowserRouter basename = {"/"} >
      <Switch>
        <Route exact path = "/" component={HomePage} />
      <Layout></Layout>
      </Switch>
      </BrowserRouter>
    );
  }
}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


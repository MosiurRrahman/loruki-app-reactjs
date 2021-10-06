import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/app';
import defaultLayout from './components/layouts/Main';
import './index.css';
// import './utilities';






class Root extends React.Component{
  render(){
    return(
      <BrowserRouter basename = {"/"} >
      <Switch>
        <Route exact path = "/HomePage" component={defaultLayout} />
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


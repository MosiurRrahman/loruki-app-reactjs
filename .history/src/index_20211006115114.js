import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/app';
import defaultLayout from './components/layouts/Main';
import feature from './components/pages/feature/Feature';
import './index.css';
// import './utilities';






class Root extends React.Component{
  render(){
    return(
      <BrowserRouter basename = {"/"} >
      <Switch>
        <Route exact path = "/home" component={defaultLayout} />
      <Layout>
          <Route path='/feature' component={feature}></Route>
      </Layout>
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


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/app';
import './index.css';
// import './utilities';






class Root extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>

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


import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/app';
import './index.css';
// import './utilities';






class Root extends React.Component{
  render(){
    return(
      <Layout></Layout>
    );
  }
}




ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


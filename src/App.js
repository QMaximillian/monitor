import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import { Router, Redirect } from "@reach/router";
import jwt from "jsonwebtoken";

function AuthRoute(props){
  // console.log(props.client)
  const authToken = localStorage.getItem('token')
  if (!authToken) {
    return <Redirect noThrow to={"/login"} />;
  }

  const authenticate = jwt.verify(authToken, 'frindle')

  if (authenticate.id) {
    return props.render 
  } else {
    return <Redirect noThrow to={'/login'}/>
  }
}

function App(props) {

  return (
    <Layout>
      <Router>
        <Login path="/login" />
        <AuthRoute path="/monitor-view" render={<MonitorView />} />
        <AuthRoute path="/home" render={<Home />} />
      </Router>
    </Layout>
  );
}


export default App

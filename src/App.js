import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import { Router, Redirect } from "@reach/router";
import getToken from './components/ProtectedRoutes'
import { ApolloConsumer } from "react-apollo";


function AuthRoute(props) {
  let user = false
          if (user) {
            return props.render
          }
          return <Redirect noThrow to='login'/>
          
}


function App(props) {
  return (
    <Layout>
      <Router>
        <Login path="/login" />
        <MonitorView path='/monitor-view'/>
        <AuthRoute path="/home" render={<Home />} />
      </Router>
    </Layout>
  );
}

async function authRoutes() {
  if (localStorage.getItem('token')) {
    return <Home path="/home"/>;
  }
}


export default App;

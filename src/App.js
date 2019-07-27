import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import { Router, Redirect } from "@reach/router";
import getToken from './components/ProtectedRoutes'


function AuthRoute(props) {
  // console.log(props)
          // if (props) {
            return props.render
          // }
          // return <Redirect noThrow to='login'/>
          
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


export default App;

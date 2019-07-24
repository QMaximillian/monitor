import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import './index.css';
import { Link, Router, navigate, Redirect } from "@reach/router";
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
  console.log(props)
  return (
    <Layout>
      <Router>
        <Login default path="/login" />
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

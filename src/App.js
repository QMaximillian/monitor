import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import jwt from "jsonwebtoken";
import gql from "graphql-tag";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
                const authToken = localStorage.getItem("token");
                  if (!authToken) {
                    return <Redirect
                    to={{
                      pathname: "/login"
                    }}
                  />
                  }

                  const authenticate = jwt.verify(authToken, 'frindle')

                  if (authenticate.id) {
                    return (<Component {...props} />)
                  } 
                  else {
                    return (
                      <Redirect
                        to={{
                          pathname: "/login",
                        }}
                    />
                    )
                  }
                }}/>)
              }



function App(props) {

          return (
            <Layout>
              <Router>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact
                    path="/monitor-view"
                    component={MonitorView}
                  />
                  <PrivateRoute exact path="/home" component={Home}/>
                </Switch>
              </Router>
            </Layout>
          );
}

export default App

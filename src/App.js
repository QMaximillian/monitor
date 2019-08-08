import React, { useState } from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import jwt from "jsonwebtoken";
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
  const [redirect, setRedirect] = useState(false)
            return (
              <Layout>
                <Router>
                  <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute
                      exact
                      path="/monitor-view"
                      component={MonitorView}
                    />
                    <PrivateRoute
                      exact
                      path="/home"
                      component={Home}
                    />
                    <PrivateRoute
                      exact
                      path="/monitor-audition/:id"
                      component={MonitorView}
                    />
                    <Route
                      exact
                      component={props => {
                        return (
                          <div>
                            <div>No Match</div>
                            <button
                              onClick={() => setRedirect(true)}
                            >
                              Go To Login
                            </button>
                            {redirect ? (
                              <Redirect to="/login" />
                            ) : null}
                          </div>
                        );
                      }}
                    />
                  </Switch>
                </Router>
              </Layout>
            );
  }

export default App

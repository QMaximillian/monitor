import React, { useState } from 'react';
import Layout from './components/Layout'
import Home from './pages/Home'
import MonitorView from './pages/MonitorView'
import Landing from './pages/Landing'
import './index.css';
import jwt from "jsonwebtoken";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import "react-dates/initialize";


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
                const authToken = localStorage.getItem("token");
                  if (!authToken) {
                    return <Redirect
                    to={{
                      pathname: "/"
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
                          pathname: "/",
                        }}
                    />
                    )
                  }
                }}/>)
              }



function App(props) {
  const [redirect, setRedirect] = useState(false)
            return (
              <Router>
                <Layout>
                  <Switch>
                    {/* <PrivateRoute
                      exact
                      path="/monitor-view"
                      component={MonitorView}
                    /> */}
                    <PrivateRoute
                      exact
                      path="/monitor/home"
                      component={Home} 
                    />
                    <PrivateRoute
                      exact
                      path="/monitor-audition/:id"
                      component={MonitorView}
                    />
                    <Route exact path="/" component={Landing} />
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
                            {redirect && <Redirect to="/" />}
                          </div>
                        );
                      }}
                    />
                  </Switch>
                </Layout>
              </Router>
            );
  }

export default App

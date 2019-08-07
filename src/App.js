import React, { useState } from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import jwt from "jsonwebtoken";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { getViewerId } from './lib/helpers';



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


// const { loading, error, data } = useQuery(GET_VIEWER_HOME, {
//   variables: { id: '51215840-b68f-4a4f-95f4-42aa5fde630f' }
// });

  // const [id, setId] = useState(getViewerId())
  // console.log(id)
  // if (error) return null
  // if (loading) return 'Loading...'
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
                    <PrivateRoute exact path="/monitor-audition/:id" component={MonitorView}/>
                  </Switch>
                </Router>
              </Layout>
            )
  }

const GET_VIEWER_HOME = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      first_name
      last_name
      email
      phone_number
      gender
      equity
      monitor_auditions {
        id
        show_name
      }
    }
  }
`;

export default App

import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import { Router, Redirect } from "@reach/router";
import jwt from "jsonwebtoken";
import { getViewerId } from './lib/helpers';
import { Query } from 'react-apollo'
import gql from "graphql-tag";

function AuthRoute(props){

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
              
                <Query
                  query={GET_VIEWER}
                  variables={{ id: getViewerId().id }}
                >
                  {({ loading, error, data }) => {
                    if (error) return error;
                    if (loading) return "Loading...";
                    if (data && data.user) {
                      return (
                        <Router>
                          <AuthRoute
                            path="/monitor-view"
                            render={<MonitorView />}
                          />
                          <AuthRoute path="/home" render={<Home />} />
                         </Router>
                      );
                    } else {
                      return (
                        <Router>
                          <Login path="/login" />
                         </Router>
                      );
                    }
                  }}
                </Query>
             
            </Layout>
          );
}

const GET_VIEWER = gql`
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
  }`

export default App

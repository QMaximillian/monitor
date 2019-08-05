import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import jwt from "jsonwebtoken";
import { getViewerId } from './lib/helpers';
import { Query } from 'react-apollo'
import gql from "graphql-tag";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// function AuthRoute(props){

//   const authToken = localStorage.getItem('token')
//   if (!authToken) {
//     return <Redirect noThrow to={"/login"} />;
//   }

//   const authenticate = jwt.verify(authToken, 'frindle')

//   if (authenticate.id) {
//     return props.render 
//   } else {
//     return <Redirect noThrow to={'/login'}/>
//   }
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//                 const authToken = localStorage.getItem("token");
//                   if (!authToken) {
//                     return <Redirect
//                     to={{
//                       pathname: "/login"
//                     }}
//                   />
//                   }

//                   const authenticate = jwt.verify(authToken, 'frindle')

//                   if (authenticate.id) {
//                     return (<Component {...props} />)
//                   } 
//                   else {
//                     return (
//                       <Redirect
//                         to={{
//                           pathname: "/login",
//                         }}
//                     />
//                     )
//                   }
//                 }}/>)
//               }

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        console.log(localStorage.getItem("token"));
        return localStorage.getItem("token") ? (
          <Component {...props} />
        ) : 
            (<Redirect
              to={{
                pathname: "/login",
                state: { from: props.location}
              }}
            />
          )
        }}
        />
  )}



function App(props) {
          return (
            <Layout>
              {/* <Query
                  query={GET_VIEWER}
                  variables={{ id: getViewerId().id }}
                >
                  {({ loading, error, data }) => {
                    if (error) return error;
                    if (loading) return "Loading...";
                    if (data && data.user) {
                      return ( */}

              <Router>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact
                    path="/monitor-view"
                    component={MonitorView}
                  />
                  <PrivateRoute exact path="/home" component={Home} />
                </Switch>
              </Router>
              {/* );
                    }
                  }}
                </Query>
              */}
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

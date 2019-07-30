import React from 'react';
import Login from './components/Login'
import Layout from './components/Layout'
import Home from './components/Home'
import MonitorView from './components/MonitorView'
import './index.css';
import { Router, Redirect } from "@reach/router";
import jwt from "jsonwebtoken";
import { getViewerId } from './lib/helpers'
// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'

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



export const ViewerIdContext = React.createContext();
function App(props) {

  const value = {
    id: getViewerId()
  }

  return (
          <ViewerIdContext.Provider value={value}>
            <Layout>
              <Router>
                <Login path="/login" />
                <AuthRoute path="/monitor-view" render={<MonitorView />} />
                <AuthRoute path="/home" render={<Home />} />
              </Router>
            </Layout>
          </ViewerIdContext.Provider>
  );
}

// const GET_VIEWER = gql`
//     query viewer($id: String!) {
//       user(id: $id) {
//         first_name
//         last_name
//     }
//   }`

export default App

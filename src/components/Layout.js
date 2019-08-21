import React, { useState } from 'react'

import { confirmLoggedIn } from "../lib/helpers";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import {Redirect} from 'react-router-dom'
import Navigation from './Navigation'

function Layout(props) {

  // const [loggedIn, setLoggedIn] = useState(confirmLoggedIn());
  const {loading, error, data} = useQuery(GET_VIEWER, { fetchPolicy: 'network-only'})
  
  

  
    return (
      <div className="h-screen w-screen">
        <Navigation viewer={data && data.viewer} />
        {props.children}
      </div>
    );
}

const GET_VIEWER = gql`
      query {
        viewer {
          id
          first_name
          last_name
          email
          phone_number
          gender
          equity
          roles {
            id
            role
          }
        }
      }
`

export default Layout
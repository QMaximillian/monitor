import React, { useState } from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'
import { confirmLoggedIn } from "../lib/helpers";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

function Layout(props) {
  const [showDropdown, setShowDropdown] = useState(false)
  // const [loggedIn, setLoggedIn] = useState(confirmLoggedIn());
  const {loading, error, data} = useQuery(GET_VIEWER, { fetchPolicy: 'network-only'})

  function renderDropdown(){
    return (
      showDropdown && (
        <div className="absolute w-full h-64 border border-black mt-8 shadow-2xl rounded-lg border border-m-purple-500 ">
          <Login />
        </div>
      )
    );
            
  }
  

  function renderRightMenu(){

    if (loading) return "Loading..."
    if (data && data.viewer) {
      return (
        <div>
          {data.viewer.first_name}
        </div>
      )
    }

    if (!data) {
      return (
        <div className="flex relative w-64 justify-end">
          <div onClick={() => setShowDropdown(!showDropdown)}>LOGIN</div>
          <div className="mx-2">|</div>
          <div>SIGNUP</div>
          {renderDropdown()}
        </div>
      );     
    }
  }
    return (
      <div className="h-screen w-screen">
        <div className="border border-red-500 h-10 justify-between flex items-center px-10">
          <Link to="/">MONITOR</Link>
          {renderRightMenu()}
        </div>
        <div className="font-primary bg-m-off-white-200 h-full w-full border border-black px-4 pt-4">
          {props.children}
        </div>
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
        }
      }
`

export default Layout
import React, { useState } from 'react'
import Login from "./Login";
import { Link, Redirect } from "react-router-dom";
import {useApolloClient, useMutation} from '@apollo/react-hooks'


export default function Navigation(props){
  const [showDropdown, setShowDropdown] = useState(false);
  const client = useApolloClient();
  const [redirect, setRedirect] = useState(false)
  const [showRoutes, setShowRoutes] = useState(false)

  



  
  function renderDropdown(){
    return (
      showDropdown && (
        <div className="z-10 absolute w-full h-64 border border-black mt-8 shadow-2xl rounded-lg border border-m-purple-500 ">
          <Login />
        </div>
      )
    );
            
  }

  function mappedLinks(){
    return props.viewer.roles.map(role => {
      const lowerCaseRole = role.role.toLowerCase();
      return (
        <Link
          onClick={() => setShowRoutes(!showRoutes)}
          className=""
          to={`/${lowerCaseRole}/home`}
        >
          {lowerCaseRole}
        </Link>
      );
    })
  }
       return (
         <div>
           <div className="border border-red-500 h-10 justify-between flex items-center px-10">
             <Link to="/">MONITOR</Link>
             {props.viewer ? (
               <div className="flex relative">
                 <div className="mx-4">{props.viewer.first_name}</div>
                 <div
                   onClick={() => setShowRoutes(!showRoutes)}
                   className="mx-4"
                 >
                   <i className="fas fa-chevron-down" />
                 </div>
                 {showRoutes && (
                   <div className="bg-m-purple-500 z-10 mt-8 h-64 w-full absolute border border-black flex flex-col">
                     {mappedLinks()}
                   </div>
                 )}
                 <div
                   className="mx-4"
                   onClick={async () => {
                     if (localStorage.getItem("token")) {
                       localStorage.removeItem("token");
                     }
                     console.log("localStorage", localStorage);

                     setShowDropdown(false);
                     setRedirect(true);

                     await client.resetStore();
                     window.location.reload(true);
                   }}
                 >
                   LOGOUT
                 </div>
                 {redirect && <Redirect to="/" />}
               </div>
             ) : (
               <div className="flex relative w-64 justify-end">
                 <div onClick={() => setShowDropdown(!showDropdown)}>
                   LOGIN
                 </div>
                 <div className="mx-2">|</div>
                 <div>SIGNUP</div>
                 {renderDropdown()}
               </div>
             )}
           </div>
           <div className="font-primary bg-m-off-white-200 h-full w-full border border-black px-4 pt-4" />
         </div>
       );
}


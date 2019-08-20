import React, { useState } from 'react'
import Login from "./Login";
import { Link, Redirect } from "react-router-dom";
import {useApolloClient, useMutation} from '@apollo/react-hooks'


export default function Navigation(props){
  const [showDropdown, setShowDropdown] = useState(false);
  const client = useApolloClient();
  const [redirect, setRedirect] = useState(false)

  



  
  function renderDropdown(){
    return (
      showDropdown && (
        <div className="absolute w-full h-64 border border-black mt-8 shadow-2xl rounded-lg border border-m-purple-500 ">
          <Login />
        </div>
      )
    );
            
  }
       return (
         <div>
           <div className="border border-red-500 h-10 justify-between flex items-center px-10">
             <Link to="/">MONITOR</Link>
             {props.viewer ? (
               <div>
                 <div>{props.viewer.first_name}</div>
                 <div
                   onClick={async () => {
                     if (localStorage.getItem("token")) {
                       localStorage.removeItem("token");
                     }
                     console.log("localStorage", localStorage);

                     setShowDropdown(false);
                     setRedirect(true);

                     await client.resetStore();
                     window.location.reload(true)
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
             ) }
           </div>
           <div className="font-primary bg-m-off-white-200 h-full w-full border border-black px-4 pt-4" />
         </div>
       );
}


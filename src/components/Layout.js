import React, { useState } from 'react'
import Login from './Login'

function Layout(props) {
  const [showDropdown, setShowDropdown] = useState(false)

  function renderDropdown(){
    return showDropdown && 
      (
        <div className="absolute w-full h-64 border border-black mt-8">
          <Login />
        </div>
      )
            
  }
    return (
      <div className="h-screen w-screen">
        <div className="border border-red-500 h-10 justify-between flex items-center px-10">
          <div>MONITOR</div>
          <div className="flex relative w-64 justify-end">
            <div onClick={() => setShowDropdown(!showDropdown)}>LOGIN</div>
            <div className="mx-2">|</div>
            <div>SIGNUP</div>
            {renderDropdown()}
          </div>
        </div>
        <div className="font-primary bg-m-off-white-200 h-full w-full border border-black px-4 pt-4">
          {props.children}
        </div>
      </div>
    );
}

export default Layout
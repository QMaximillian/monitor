import React from 'react'

function Layout(props) {


    return (
      <div className="font-primary bg-m-off-white-200 h-screen w-screen border border-black px-4 pt-4">
        {props.children}
      </div>
    );
}

export default Layout
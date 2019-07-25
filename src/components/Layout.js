import React from 'react'

function Layout(props) {


    return (
        <div className="bg-blue-500 h-screen w-full">
            {props.children}
        </div>
    )
}

export default Layout
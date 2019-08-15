import React from 'react'

function Layout(props) {


    return (
        <div className="bg-m-white-500 h-screen w-full">
            {props.children}
        </div>
    )
}

export default Layout
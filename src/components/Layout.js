import React from 'react'

function Layout(props) {


    return (
        <div className="bg-white h-screen w-full">
            {props.children}
        </div>
    )
}

export default Layout
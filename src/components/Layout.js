import React from 'react'

function Layout(props) {


    return (
        <div className="bg-blue-500">
            {props.children}
        </div>
    )
}

export default Layout
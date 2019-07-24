import React from 'react'

function Auth(props) {
    const user = true
    if (user) {
        return props.children
    }
        return
}

export default Auth
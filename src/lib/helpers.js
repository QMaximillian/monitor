import { useState } from 'react'
import jwt from "jsonwebtoken";

export const getViewerId = () => {
    if (localStorage.getItem('token')) {
        const token = jwt.verify(localStorage.getItem("token"), "frindle")
        console.log(token)
        return token
    }
}

// function useRedirect(){
//     const [redirect, setRedirect] = useState(false)

//     return 
// }
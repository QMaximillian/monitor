import jwt from "jsonwebtoken";

export const getViewerId = () => {
    if (localStorage.getItem('token')) {
        const token = jwt.verify(localStorage.getItem("token"), "frindle")
        return token
    }
}
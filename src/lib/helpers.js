import jwt from "jsonwebtoken";

export const getViewerId = () => {
    if (localStorage.getItem('token')) {
        return jwt.verify(localStorage.getItem("token"), "frindle").id
    }
}
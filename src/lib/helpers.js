
import jwt from "jsonwebtoken";



export function getUserId() {


     if (localStorage.getItem('token')) {
        const token = jwt.verify(localStorage.getItem("token"), "frindle")
        return token.id

    }

  
}

// function useRedirect(){
//     const [redirect, setRedirect] = useState(false)

//     return 
// }
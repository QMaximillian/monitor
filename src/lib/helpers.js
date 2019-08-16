
import jwt from "jsonwebtoken";



export function getUserId() {


     if (localStorage.getItem('token')) {
        const token = jwt.verify(localStorage.getItem("token"), "frindle")
        return token.id

    }

  
}


export const stateAbbreviations = [
 {value: "AL", label: "AL"}, 
 {value: "AK", label: "AK"}, 
 {value: "AS", label: "AS"}, 
 {value: "AZ", label: "AZ"}, 
 {value: "AR", label: "AR"}, 
 {value: "CA", label: "CA"}, 
 {value: "CO", label: "CO"}, 
 {value: "CT", label: "CT"}, 
 {value: "DE", label: "DE"}, 
 {value: "DC", label: "DC"},
 {value: "FM", label: "FM"},
 {value: "FL", label: "FL"},
 {value: "GA", label: "GA"},
 {value: "GU", label: "GU"},
 {value: "HI", label: "HI"},
 {value: "ID", label: "ID"},
 {value: "IL", label: "IL"},
 {value: "IN", label: "IN"},
 {value: "IA", label: "IA"},
 {value: "KS", label: "KS"},
 {value: "KY", label: "KY"},
 {value: "LA", label: "LA"},
 {value: "ME", label: "ME"},
 {value: "MH", label: "MH"},
 {value: "MD", label: "MD"},
 {value: "MA", label: "MA"},
 {value: "MI", label: "MI"},
 {value: "MN", label: "MN"},
 {value: "MS", label: "MS"},
 {value: "MO", label: "MO"},
 {value: "MT", label: "MT"},
 {value: "NE", label: "NE"},
 {value: "NV", label: "NV"},
 {value: "NH", label: "NH"},
 {value: "NJ", label: "NJ"},
 {value: "NM", label: "NM"},
 {value: "NY", label: "NY"},
 {value: "NC", label: "NC"},
 {value: "ND", label: "ND"},
 {value: "MP", label: "MP"},
 {value: "OH", label: "OH"},
 {value: "OK", label: "OK"},
 {value: "OR", label: "OR"},
 {value: "PW", label: "PW"},
 {value: "PA", label: "PA"},
 {value: "PR", label: "PR"},
 {value: "RI", label: "RI"},
 {value: "SC", label: "SC"},
 {value: "SD", label: "SD"},
 {value: "TN", label: "TN"},
 {value: "TX", label: "TX"},
 {value: "UT", label: "UT"},
 {value: "VT", label: "VT"},
 {value: "VI", label: "VI"},
 {value: "VA", label: "VA"},
 {value: "WA", label: "WA"},
 {value: "WV", label: "WV"},
 {value: "WI", label: "WI"},
 {value: "WY", label: "WY"},
];

import React from 'react'

export default function Button(props){

       return (
         <button className={`h-12 w-32 shadow-lg ${props.backgroundColor} text-white border border-black rounded-lg`}>
           {props.innerText}
         </button>
       );
}


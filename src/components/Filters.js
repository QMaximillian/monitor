import React, { useState } from 'react'
import { useSprings, animated } from 'react-spring'

export default function Filters(props){

       return (
         <div
           onClick={() => props.handleDateOrder()}
           className="flex justify-center border border-m-purple-500 w-full h-16 border-r-0 border-l-0"
         >
           <div className="flex justify-around w-full items-center">
             <div className="w-full text-center">DATE</div>
             <div className="w-full text-center flex">
               {/* <div className="w-1/2">{props.order.date}</div> */}
                 {props.order.date === 'ASC' ? <i
                   className={'fas fa-chevron-down self-center'}
                 /> : <i
                   className={'fas fa-chevron-up self-center'}
                 />
                }
             </div>
           </div>
         </div>
       );
}

    
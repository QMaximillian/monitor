import React, { useState } from 'react'
import { useSprings, animated } from 'react-spring'
import {stateAbbreviations} from '../lib/helpers'
import Select from 'react-select'

export default function Filters(props){


  function handleReset(){
    props.handleDateOrder('reset')
    props.setAbbreviation({value: '', label: ''})
  }
       return (
         <div className="text-center flex flex-col h-full rounded border border-m-purple-500 w-full h-16 border-x-0">
           <div className="text-xl border-m-purple-500 border border-r-0 border-t-0 border-l-0">
             Filters
           </div>
           <div className="pt-4">
            <button onClick={handleReset} className="px-2 py-1 bg-m-dark-300 border border-m-purple-500 shadow-md rounded">Clear All</button>
           </div>
           <div
             onClick={() => props.handleDateOrder()}
             className="flex justify-around w-full items-center pt-6"
           >
             <div className="w-full text-base text-center">DATE</div>
             <div className="w-full justify-center flex">
               {props.order.date === "ASC" ? (
                 <i className={"fas fa-chevron-down self-center"} />
               ) : (
                 <i className={"fas fa-chevron-up self-center"} />
               )}
             </div>
           </div>
           <div className="flex justify-around w-full items-center pt-6">
             <div className="w-full text-base text-center">STATE</div>
             <div className="w-full justify-center flex mx-2">
               <Select
                 className="w-20"
                 options={stateAbbreviations}
                 onChange={action => props.setAbbreviation(action)}
               />
             </div>
           </div>
         </div>
       );
}

    
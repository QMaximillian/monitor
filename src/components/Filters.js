import React, { useState } from 'react'
// import { useSprings, animated } from 'react-spring'
import {stateAbbreviations} from '../lib/helpers'
import Select from 'react-select'
import {
  SingleDatePicker
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default function Filters(props){


  
  const [focused, setFocused] = useState({beginFocused: false, endFocused: false})

  

       return (
         <div id="left-side"
           style={{ backgroundColor: "rgba(238, 223, 222, .15)" }}
           className="text-center flex flex-col h-full rounded border border-m-purple-500 w-full h-16 border-x-0"
         >
           <div
             style={{ textShadow: "1px 0px #DCABDF, 1px  1px #fff" }}
             className="text-lg border-m-purple-500 border border-r-0 border-t-0 border-l-0"
           >
             Filters
           </div>
           <div className="">
             <button
               onClick={props.clearAllFilters}
               className="mt-4 px-2 py-1 bg-m-dark-300 border border-m-purple-500 shadow-md rounded"
             >
               Clear All
             </button>
             <div
               onClick={props.handleDateOrder}
               className="flex justify-around w-full items-center pt-6"
             >
               <div className="w-1/2 text-base text-center">DATE</div>
               <div className="w-1/2 justify-center flex">
                 {props.order.date === "ASC" ? (
                   <i className={"fas fa-chevron-down self-center"} />
                 ) : (
                   <i className={"fas fa-chevron-up self-center"} />
                 )}
               </div>
             </div>
             <div className="flex justify-around w-full items-center pt-6">
               <div className="w-1/2 text-base text-center">STATE</div>
               <div className="w-1/2 justify-center flex">
                 <Select
                   className="w-20"
                   value={props.abbreviation}
                   options={stateAbbreviations}
                   onChange={action => props.setAbbreviation(action)}
                 />
               </div>
             </div>
             <div className="flex justify-around w-full items-center pt-6">
               <div className="w-1/2">BEGIN DATE</div>
               <div className="w-1/2">
                 <SingleDatePicker
                   id={"eede4381-0fd5-4d38-b7f5-67630cf9657c"}
                   focused={focused.beginFocused}
                   onFocusChange={({ focused: action }) =>
                     setFocused({ beginFocused: action })
                   }
                   onDateChange={day =>
                     props.setDate({ beginDate: day, endDate: props.date.endDate })
                   }
                   date={props.date.beginDate}
                 />
               </div>
             </div>

             <div className="pt-6 flex justify-around w-full items-center pt-6">
               <div className="w-1/2">END DATE</div>
               <div className="w-1/2">
                 <SingleDatePicker
                   id={"b7d93f25-1a85-4cc3-86e2-535b4d1b9e9e"}
                   focused={focused.endFocused}
                   onFocusChange={({ focused: action }) =>
                     setFocused({ endFocused: action })
                   }
                   onDateChange={day =>
                     props.setDate({ endDate: day, beginDate: props.date.beginDate })
                   }
                   date={props.date.endDate}
                 />
               </div>
             </div>
           </div>
         </div>
       );
}

    
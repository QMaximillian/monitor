import React, { useState } from 'react'
import { useSprings, animated } from 'react-spring'
import {stateAbbreviations} from '../lib/helpers'
import Select from 'react-select'
import {
  SingleDatePicker
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from 'moment'

export default function Filters(props){

  // const [beginDate, setBeginDate] = useState(moment())
  const [date, setDate] = useState({beginDate: moment(), endDate: moment()})
  const [focused, setFocused] = useState({beginFocused: false, endFocused: false})
  // const [endFocused, setEndFocused] = useState(false)

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
             <button
               onClick={handleReset}
               className="px-2 py-1 bg-m-dark-300 border border-m-purple-500 shadow-md rounded"
             >
               Clear All
             </button>
           </div>
           <div
             onClick={props.handleDateOrder}
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
           <div>
             <div>DATE RANGE</div>
             <div className="">
               <div>
                 BEGIN DATE
                 <SingleDatePicker
                   id={"eede4381-0fd5-4d38-b7f5-67630cf9657c"}
                   focused={focused.beginFocused}
                   onFocusChange={({ focused }) => setFocused({beginFocused: focused})}
                   onDateChange={day => setDate({beginDate: day})}
                   date={date.beginDate}
                 />
               </div>
               <div>
                 END DATE
                 <SingleDatePicker
                   id={"b7d93f25-1a85-4cc3-86e2-535b4d1b9e9e"}
                   focused={focused.endFocused}
                   onFocusChange={({ focused }) => setFocused({endFocused: focused})}
                   onDateChange={day => setDate({endDate: day})}
                   date={date.endDate}
                 />
               </div>
             </div>
           </div>
         </div>
       );
}

    
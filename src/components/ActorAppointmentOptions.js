import React, { useState } from 'react'
import format from 'date-fns/format'
import Button from './Button';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function ActorAppointmentOptions(props){
  console.log(props)
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [actual_start_or_end_mutate, { data, loading, error }] = useMutation(
    ACTUAL_APPOINTMENT_START_OR_END_TIMES,
    { variables: { start_time: startTime, end_time: endTime } }
  );

  const getUTCDate = (dateString = Date.now()) => {
    const date = new Date(dateString);

    return format(
      new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
      ),
      "YYYY-MM-DDTHH:mm:ss[Z]"
    );
  };


       return (
         <div className="w-full h-full flex flex-col">
           <div className="flex justify-around">
             {/** Set utc formatting for startTime and endTime */}
             <div onClick={() => {
               
               setStartTime(getUTCDate());
               
               }}>
               <Button innerText="Start" backgroundColor="bg-green-500" />
             </div>
             <div onClick={() => {
               
               setEndTime(getUTCDate());
               
               }}>
               <Button innerText="End" backgroundColor="bg-red-500" />
             </div>
           </div>
         </div>
       );
}


const ACTUAL_APPOINTMENT_START_OR_END_TIMES = gql`
  mutation updateActualStartOrEnd(
    $id: String!
    $actual_start: String
    $actual_end: String
  ) {
    updateActualStartOrEnd(
      id: $id
      actual_start: $actual_start
      actual_end: $actual_end
    ) {
      id
      actual_start
      actual_end
    }
  }
`;
import React, { useState, useEffect } from 'react'
import format from "date-fns/format";
import differenceInMinutes from 'date-fns/difference_in_minutes'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export default function UpcomingAppointment(props){

  const {loading, error, data, startPolling, stopPolling, called}  = useQuery(UPCOMING_APPOINTMENT, {
    variables: { audition_id: props.audition_id },
    fetchPolicy: 'network-only',
    // pollInterval: 500,
    onCompleted: () => {
      // console.log(
      //   differenceInMinutes(
      //     new Date(data && data.upcoming_appointment && data.upcoming_appointment.time),
      //     new Date()
      //   )
      // );
      if (data && data.upcoming_appointment) {
        if (
          differenceInMinutes(
            new Date(data.upcoming_appointment.time),
            new Date()
          ) <= 10
        ) {
          console.log(
            `${data.upcoming_appointment.user.first_name} is up in 10 min or less`
          );
        }
      }
    }
  });

useEffect(() => {
  startPolling(5000)
  stopPolling(() => data.upcoming_appointment === null)
}, [called, data.upcoming_appointment, startPolling, stopPolling])

 

    //  useEffect(() => {
    //    console.log(
    //      differenceInMinutes(
    //        new Date(data && data.upcoming_appointment && data.upcoming_appointment.time),
    //        Date.now()
    //      ) <= 13
    //    );
      
    //  }, [data, networkStatus]);


  if (loading) return 'Loading...'
  if (error) console.log(error)
  if (data) {
       return (
         <div className="border border-m-purple-500 bg-white rounded relative h-48 flex flex-col justify-between">
           <div
             className="text-lg text-center px-2 py-1 mr-auto rounded border-t-0 border-l-0 border-m-purple-500 border"
             style={{ textShadow: "1px 0px #DCABDF, 1px  1px #fff" }}
           >

             Upcoming Appointment
           </div>
           <div
             className="px-2 text-2xl"
             style={{ textShadow: "1px 0px #D4AF37, 1px  1px #fff" }}
           >
             {/* {props.appointment.time} */}
           </div>
           <div className="px-2">
             {/* {format(props.audition.date, "dddd, MMMM Qo YYYY")} */}
           </div>
           <div className="px-2">
             {/* {`${format(props.audition.begin_time, "H:mm a")} - ${format(
            props.audition.end_time,
            "H:mm a"
          )}`} */}
           </div>
         </div>
       );
      }
}

const UPCOMING_APPOINTMENT = gql`
  query($audition_id: String!) {
      upcoming_appointment(audition_id: $audition_id) {
        id
        time
        user {
          id
          first_name
          last_name
          email
          phone_number
        }
    }
  }
`;
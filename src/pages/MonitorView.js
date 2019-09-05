import React, { useState } from "react";
import AppointmentScroll from "../components/AppointmentScroll";
import UpcomingAppointment from '../components/UpcomingAppointment'
import MessageContainer from "../components/MessageContainer";
import ActorAppointmentInfo from '../components/ActorAppointmentInfo'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import ActorAppointmentOptions from "../components/ActorAppointmentOptions";





function MonitorView(props){

  
  const [selectedAppointment, setSelectedAppointment] = useState({})
  const { loading, data, error } = useQuery(GET_MONITOR_VIEWER_AND_AUDITION, {
    variables: { audition_id: props.match.params.id }
  });




  
  if (loading) return `Loading...`
  if (error) return `Error: ${error}`
  if (data && data.viewer && data.audition) {
    return (
      <div className="flex">
        <div className="w-1/4">
          <AppointmentScroll
            setSelectedAppointment={setSelectedAppointment}
            appointments={data.audition.appointments}
            interval={data.audition.interval}
          />
        </div>
        <div className="h-full flex flex-col justify-center w-2/4 border border-red-500 relative">
          <div className="h-auto w-full p-2">
            <ActorAppointmentInfo selectedAppointment={selectedAppointment} />
          </div>
          <div className="h-auto w-full">
            <ActorAppointmentOptions id={selectedAppointment.id}/>
          </div>
          <div className="mr-16 w-64 bg-gray-500 absolute z-10 bottom-0 right-0">
            <MessageContainer
              audition_id={data.audition.id}
              viewer={data.viewer}
            />
          </div>
        </div>
        <div className="w-1/4">
          <UpcomingAppointment audition_id={props.match.params.id} />
        </div>
      </div>
    );
  }
}


const GET_MONITOR_VIEWER_AND_AUDITION = gql`
  query($audition_id: String!) {
    viewer {
      id
      first_name
      last_name
      email
      phone_number
      gender
      equity
    }
    audition(audition_id: $audition_id) {
      id
      date
      show_name
      begin_time
      end_time
      interval
      street_num
      street_address
      city
      state
      zip_code
      appointments {
        id
        start_time
        end_time
        user {
          first_name
          last_name
          phone_number
          age
          equity
          gender
          email
          feet
          inches
          birthday
          profile_uri
        }
      }
    }
  }
`;



export default MonitorView;

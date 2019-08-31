import React, { useState } from "react";
import AppointmentScroll from "../components/AppointmentScroll";
import UpcomingAppointment from '../components/UpcomingAppointment'
import MessageContainer from "../components/MessageContainer";

import ActorProfileContainer from '../components/ActorProfileContainer'
import ChatContainer from '../components/ChatContainer'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';





function MonitorView(props){

  
  const [selectedActor, setSelectedActor] = useState('')
  const { loading, data, error } = useQuery(GET_MONITOR_VIEWER_AND_AUDITION, {
    variables: { audition_id: props.match.params.id }
  });




  
  if (loading) return `Loading...`
  if (error) return `Error: ${error}`
  if (data && data.viewer && data.audition) {
    return (
      <div className="flex">
        {/* {upcomingAppointmentData && console.log(upcomingAppointmentData)} */}
        <AppointmentScroll
          setSelectedActor={setSelectedActor}
          appointments={data.audition.appointments}
          interval={data.audition.interval}
        />
        <div className="flex w-full border border-black justify-center">
          <div className="ml-auto mt-auto mr-16 w-64  border border-black">
            <MessageContainer
              audition_id={data.audition.id}
              viewer={data.viewer}
            />
          </div>
      <UpcomingAppointment audition_id={props.match.params.id}/>
          {/* <div className="h-full flex flex-row justify-center w-full"> */}
          {/* <ActorProfileContainer selectedActor={selectedActor} />
              <ChatContainer /> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}


const GET_MONITOR_VIEWER_AND_AUDITION = gql`
  query ($audition_id: String!) {
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
        time
        user {
          first_name
          last_name
          phone_number
          age
          equity
          gender
          email
        }
      }
    }
  }
`;



export default MonitorView;

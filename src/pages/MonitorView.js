import React, { useState } from "react";
import AppointmentScroll from "../components/AppointmentScroll";
import MessageBlast from "../components/MessageBlast";
import MonitorControlCenter from "../components/MonitorControlCenter";
import MessageContainer from "../components/MessageContainer";
import TextBox from "../components/TextBox";
import ActorProfileContainer from '../components/ActorProfileContainer'
import ChatContainer from '../components/ChatContainer'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';





function MonitorView(props){

  const [message, setMessage] = useState({value: '', isValid: false})
  const [selectedActor, setSelectedActor] = useState('')
  const { loading, data, error } = useQuery(GET_MONITOR_VIEWER_AND_AUDITION, {
    variables: { audition_id: props.match.params.id }
  });

  
  if (loading) return `Loading...`
  if (error) return `Error: ${error}`
  if (data && data.viewer && data.audition) {
    return (
      <div className="flex">
        <AppointmentScroll setSelectedActor={setSelectedActor} appointments={data.audition.appointments} interval={data.audition.interval}/>
        <MonitorControlCenter>
          <div className="flex flex-col justify-between w-full">
            <MessageBlast>
              <div className="flex flex-col w-full p-4">
                <TextBox
                  name="message"
                  type="text"
                  placeholder="Send a message to all"
                  value={message.message && message.message.value}
                  onChange={({ name, isValid, value }) =>
                    setMessage({
                      [name]: {
                        value,
                        isValid
                      }
                    })
                  }
                />
                <MessageContainer />
              </div>
            </MessageBlast>
            <div className="h-full flex flex-row justify-center w-full">
              <ActorProfileContainer selectedActor={selectedActor}/>
              <ChatContainer />
            </div>
          </div>
        </MonitorControlCenter>
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

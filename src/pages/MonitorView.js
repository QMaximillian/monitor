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
import { getUserId } from '../lib/helpers';





function MonitorView(props){
  const id = getUserId()
  const [message, setMessage] = useState({value: '', isValid: false})
  // const { loading, data, error } = useQuery(GET_VIEWER_HOME, { variables: { id, audition_id: props.match.params.id} });


    // if (error) return `Error: ${error}`
  console.log(props)
    return (
        <div className="flex">
          <AppointmentScroll />
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
                            })}
                  />
                  <MessageContainer />
                </div>
              </MessageBlast>
              <div className="h-full flex flex-row justify-center w-full">
                <ActorProfileContainer />
                <ChatContainer />
              </div>
            </div>
          </MonitorControlCenter>
        </div>
    );
}




// const GET_AUDITION = gql`
// query Audition($id: ID!){
//   getAudition(id: $id) {

//   }
// }`


export default MonitorView;

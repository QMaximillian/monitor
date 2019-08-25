import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";
import Message from './Message'
import TextBox from './TextBox'

function MessageContainer(props){
  const { audition_id, user_id } = props
const [message, setMessage] = useState({ value: "", isValid: false });
const [createMessage] = useMutation(CREATE_MESSAGE, {
  variables: { text: message.message && message.message.value, audition_id, user_id }
});

const {data: { getAllMessages }, loading: queryLoading, error: queryError, subscribeToMore} = useQuery(GET_AUDITION_MESSAGES, 
    {
      variables: { audition_id },
    }
  )

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: MESSAGE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData) return prev;
        console.log(subscriptionData);
        return {
          getAllMessages: [
            ...prev.getAllMessages,
            subscriptionData.data.messageCreated
          ]
        };
      }
    });

    return () => unsubscribe()
  }, [getAllMessages, subscribeToMore])


    return (
      <div>
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
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
          </div>
          <button
            className="rounded mb-1 border border-m-purple-500 px-4"
            onClick={async () => {
              // if (!message) return
              await createMessage();
              setMessage({ value: "", isValid: false });
            }}
          >
            Send
          </button>
        </div>
        <div className="flex w-full border border-blue-500 border-4 mt-px">

            <div className="h-56 overflow-y-scroll w-full flex flex-col w-full">
              {console.log("getAllMessages", getAllMessages)}
              {getAllMessages &&
                getAllMessages.map(message => {
                    return (
                      <div
                        className={`border border-m-blue-500 self-start my-2 
                        ${user_id === message.user_id ? 'self-end ml-24' : 'self-start mr-24'}`}
                      >
                        <Message key={message.id} message={message} />
                      </div>
                    );
                })}
            </div>

        </div>
      </div>
    );
  }

const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!, $audition_id: String!, $user_id: String) {
    createMessage(text: $text, audition_id: $audition_id, user_id: $user_id) {
      id
      text
      audition_id
      user_id
    }
  }
`;

const MESSAGE_SUBSCRIPTION = gql`
subscription messageCreated {
  messageCreated {
    id
    text
    audition_id
    user_id
  }
}`

const GET_AUDITION_MESSAGES = gql`
  query getAllMessages($audition_id: String!) {
    getAllMessages(audition_id: $audition_id) {
      id
      text
      audition_id
      user_id
    }
  }
`


export default MessageContainer

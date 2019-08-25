import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import gql from "graphql-tag";
import Message from './Message'
import TextBox from './TextBox'

function MessageContainer(props){
  const { id: user_id, first_name, last_name  } = props.viewer
  const { audition_id } = props

const [message, setMessage] = useState({ value: "", isValid: false });
const [createMessage] = useMutation(CREATE_MESSAGE, {
  variables: { text: message.message && message.message.value, audition_id, user_id, first_name, last_name }
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
        // console.log(subscriptionData);
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
        <div className="flex w-full border-4 mt-px">

            <div className="h-56 overflow-y-scroll w-full flex flex-col w-full px-4">

              {getAllMessages &&
                getAllMessages.map(message => {
                    return (
                        <Message key={message.id} message={message} user_id={user_id}/>
                    );
                })}
            </div>

        </div>
      </div>
    );
  }

const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!, $audition_id: String!, $user_id: String!, $first_name: String!, $last_name: String!) {
    createMessage(text: $text, audition_id: $audition_id, user_id: $user_id, first_name: $first_name, last_name: $last_name) {
      id
      # text
      # audition_id
      # user_id
      # first_name
      # last_name
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
    first_name
    last_name
  }
}`

const GET_AUDITION_MESSAGES = gql`
  query getAllMessages($audition_id: String!) {
    getAllMessages(audition_id: $audition_id) {
      id
      text
      audition_id
      user_id
      first_name
      last_name
    }
  }
`


export default MessageContainer

import React from "react";
import PropTypes from 'prop-types'

export default function Message(props) {

	function messageSide(){
		return props.message.user_id === props.user_id ? 'justify-end' : 'justify-start'
	}
    return (
      <div
        className={`my-1 max-w-xl
                        ${
                          props.user_id === props.message.user_id
                            ? "self-end"
                            : "self-start"
                        }`}
      >
        <div className="w-full flex-col">
          <div className={`text-xs opacity-25 flex ${messageSide()}`}>
            <div>{`${props.message.first_name} ${props.message.last_name}`}</div>
          </div>
          <div className={`flex ${messageSide()}`}>
            <div className="border-m-purple-500 border rounded px-1">
              {props.message.text}
            </div>
          </div>
        </div>
      </div>
    );
    
  }



Message.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string,
        createdAt: PropTypes.string,
    })
}

Message.defaultProps = {
    id: 1,
    createdAt: Date.now(),
    text: 'Hello, 1234'
}
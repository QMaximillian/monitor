import React from "react";
import PropTypes from 'prop-types'

export default function Message(props) {
  console.log("text", props.message.text);
    return (
        <div className="border-orange-500 border">
            {/* <div>{this.props.message.createdAt}</div> */}
            <div>{props.message.text}</div>
        </div>
    )
    
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
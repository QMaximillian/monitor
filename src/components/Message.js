import React from "react";
import PropTypes from 'prop-types'

class Message extends React.Component {
  render() {
    return (
        <div className="border-orange-500 border">
            <div>{this.props.createdAt}</div>
            <div>{this.props.text}</div>
        </div>
    )
  }
}

export default Message;


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
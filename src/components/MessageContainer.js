import React from "react";
import Message from './Message'

class MessageContainer extends React.Component {
  render() {
    return (
      <div className="flex w-full border border-blue-500 border-4 mt-px justify-end">
        <div>
          <div className="h-56 overflow-y-scroll w-full border border-red-500">
            {new Array(20).fill(<Message />).map(message => message)}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageContainer;

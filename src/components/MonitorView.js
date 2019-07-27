import React, { Component } from "react";
import AppointmentScroll from "./AppointmentScroll";
import MessageBlast from "./MessageBlast";
import MonitorControlCenter from "./MonitorControlCenter";
import MessageContainer from "./MessageContainer";
import TextBox from "./TextBox";
import ActorProfileContainer from './ActorProfileContainer'
import ChatContainer from './ChatContainer'
class MonitorView extends Component {
  

  state = {
      message: {value: '', isValid: false},
  }

  handleInputChange = ({ value, name, isValid }) => {
    this.setState({
      [name]: {
        value,
        isValid
      }
    });
  };
  
  render() {
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
                  value={this.state.message.value}
                  onChange={this.handleInputChange}
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
}

export default MonitorView;

import React, { Component } from "react";
import AppointmentScroll from "./AppointmentScroll";
import MessageBlast from "./MessageBlast";
import MonitorControlCenter from "./MonitorControlCenter";
import CastingForm from "./CastingForm";

class MonitorView extends Component {
  render() {
    return (
      <div className="flex">
        <AppointmentScroll />
        <MonitorControlCenter>
          <div className="flex flex-col justify-between">
            <MessageBlast />
            <CastingForm />
          </div>
        </MonitorControlCenter>
      </div>
    );
  }
}

export default MonitorView;

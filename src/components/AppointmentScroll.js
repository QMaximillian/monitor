import React, { Component } from 'react'
import AppointmentScrollTab from './AppointmentScrollTab'
class AppointmentScroll extends Component {

    
    render(){
        return (
          <>
            <div className="flex flex-col border border-red-500 w-1/3 overflow-y-scroll relative h-screen">
              <div className="h-auto">
                {new Array(20).fill(<AppointmentScrollTab />).map(tab => tab)}
              </div>
            </div>
          </>
        );
    }
}

export default AppointmentScroll
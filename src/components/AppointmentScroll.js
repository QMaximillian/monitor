import React from 'react'
import AppointmentScrollTab from './AppointmentScrollTab'



function AppointmentScroll(props){

        return (
            <div className="flex flex-col border border-red-500 w-1/3 overflow-y-scroll relative h-screen">
              <div className="h-auto">
                {props.appointments.map(appointment => {
                  return <AppointmentScrollTab key={appointment.id} setSelectedActor={props.setSelectedActor} appointment={appointment} interval={props.interval}/>
                })}
              </div>
            </div>
        );
}

export default AppointmentScroll
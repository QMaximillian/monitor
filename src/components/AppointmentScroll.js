import React from 'react'
import AppointmentScrollTab from './AppointmentScrollTab'



function AppointmentScroll(props){

        return (
            <div className="flex flex-col border border-red-500 w-full overflow-y-scroll relative" style={{height: "94.5vh"}}>
              <div className="h-auto">
                {props.appointments.map(appointment => {
                  return (
                    <AppointmentScrollTab
                      key={appointment.id}
                      setSelectedAppointment={props.setSelectedAppointment}
                      appointment={appointment}
                      interval={props.interval}
                    />
                  );
                })}
              </div>
            </div>
        );
}

export default AppointmentScroll
import React from "react";
import PropTypes from 'prop-types'
import { format } from 'date-fns'

function AppointmentScrollTab(props){

    return (
      <>
        <div onClick={() => props.setSelectedAppointment(props.appointment)} className="w-full h-48 justify-between border-black bg-gray-500 border flex flex-col p-2">
          <div className="">
            <div className="flex text-xl justify-between">
              <div className="flex">
                <div className="bg-green-500 border border-black shadow rounded-full h-4 w-4 flex justify-center self-center" />
                <div className="ml-2">
                  {`${format(
                    props.appointment.start_time,
                    "h:mm a"
                  )} - ${format(
                      props.appointment.end_time,
                    "h:mm a"
                  )}`}
                </div>
              </div>
              <div className="">
                {props.appointment.user.equity ? "EQUITY" : ""}
              </div>
            </div>
            <div className="flex text-2xl">
              {`${props.appointment.user.first_name} ${props.appointment.user.last_name}`}
            </div>
            <div className="flex">
              {`${props.appointment.user.phone_number} · ${props.appointment.user.email}`}
            </div>
          </div>
          <div>
          </div>
        </div>
      </>
    );
}

export default AppointmentScrollTab;

AppointmentScrollTab.propTypes = {
  appointment: PropTypes.shape({
    user: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      equity: PropTypes.bool.isRequired,
      gender: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      feet: PropTypes.number.isRequired,
      inches: PropTypes.number.isRequired,
      monologues: PropTypes.array,
      songs: PropTypes.array,
      key: PropTypes.number
    })
  }),
  appointmentTime: PropTypes.any.isRequired,
  auditionInterval: PropTypes.number.isRequired
};

AppointmentScrollTab.defaultProps = {
  appointment: {
    user: {
      first_name: 'Quinn',
      last_name: 'Lashinsky',
      email: 'quinnlashinsky@gmail.com',
      phone_number: '973-634-7866',
      equity: true,
      gender: 'Male',
      monologues: ['Take Me Out', 'The Iceman Cometh'],
      songs: ['Driving Home on The Freeway', 'Nights']
    }
  },
  appointmentTime: '2019-07-25T03:30:00+0000',
  auditionInterval: 30
};
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { addMinutes, format } from 'date-fns'

class AppointmentScrollTab extends Component {
  render() {
    return (
      <>
        <div className="w-full h-48 justify-between border-black bg-gray-500 border flex flex-col p-2">
          <div className="">
            <div className="flex text-xl justify-between">
              <div className="flex">
                <div className="bg-green-500 border border-black shadow rounded-full h-4 w-4 flex justify-center self-center" />
                <div className="ml-2">
                  {`${format(
                    this.props.appointmentTime,
                    "h:mm a"
                  )} - ${format(
                    addMinutes(
                      this.props.appointmentTime,
                      this.props.auditionInterval
                    ),
                    "h:mm a"
                  )}`}
                </div>
              </div>
              <div className="">
                {this.props.user.equity ? "EQUITY" : ""}
              </div>
            </div>
            <div className="flex text-2xl">
              {`${this.props.user.first_name} ${this.props.user.last_name}`}
            </div>
            <div className="flex">
              {`${this.props.user.phone} · ${this.props.user.email}`}
            </div>
          </div>
          <div>
            <div className="flex justify-around mb-4">
              <div>
                <label className="shadow-lg bg-blue-300 text-white border border-black rounded-lg p-4">
                  Monologues
                </label>
              </div>
              <div>
                <label className="shadow-lg bg-blue-300 text-white border border-black rounded-lg p-4">
                  Songs
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppointmentScrollTab;

AppointmentScrollTab.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    equity: PropTypes.bool.isRequired,
    gender: PropTypes.string.isRequired,
    monologues: PropTypes.array,
    songs: PropTypes.array,
    key: PropTypes.number
  }),
  appointmentTime: PropTypes.any.isRequired,
  auditionInterval: PropTypes.number.isRequired
};

AppointmentScrollTab.defaultProps = {
  user: {
    first_name: 'Quinn',
    last_name: 'Lashinsky',
    email: 'quinnlashinsky@gmail.com',
    phone: '973-634-7866',
    equity: true,
    gender: 'Male',
    monologues: ['Take Me Out', 'The Iceman Cometh'],
    songs: ['Driving Home on The Freeway', 'Nights']
  },
  appointmentTime: '2019-07-25T03:30:00+0000',
  auditionInterval: 30
};
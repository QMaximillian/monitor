import React, { Component } from 'react'
import AppointmentScrollTab from './AppointmentScrollTab'
import gql from 'graphql-tag'


class AppointmentScroll extends Component {

    
    render(){
        return (
            <div className="flex flex-col border border-red-500 w-1/3 overflow-y-scroll relative h-screen">
              <div className="h-auto">
                {new Array(20).fill(AppointmentScrollTab).map((AppointmentScrollTab, i) => <AppointmentScrollTab key={i}/>)}
              </div>
            </div>
        );
    }
}

const GET_VIEWER_MONITOR_VIEW = gql`
  query getMonitorView($id: ID!){
    getMonitorView(id: $id) {
      user(id: $id) {
          id
          first_name
          last_name
          email
          phone_number
          gender
          equity
          actors {
            id
            first_name
            last_name
            email
            phone_number
            gender
            equity
          }
        }
    }
  }
`

export default AppointmentScroll
import React, { useEffect } from 'react'
import format from 'date-fns/format'

export default function ActorAppointmentOptions(props){

  function handlePhoneFormat(){
    let phone = props.selectedActor && props.selectedActor.phone_number.replace(/\D/g, "");
    const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      phone = `${match[1]}${match[2] ? "-" : ""}${match[2]}${
        match[3] ? "-" : ""
      }${match[3]}`;
    }
    return phone;
}

console.log(handlePhoneFormat())

      const { selectedActor } = props
      if (props.selectedActor) {
        return (
          <div className="w-full">
            ActorAppointmentOptions
            {console.log(props)}
            <img className="h-24 w-24" alt="A user with an appointment to audition" src={selectedActor.profile_uri}/>
            <div>{selectedActor.first_name}</div>
            <div>{selectedActor.last_name}</div>
            <div>{selectedActor.age}</div>
            <div>{selectedActor.email}</div>
            <div>{selectedActor.gender}</div>
            <div>{selectedActor.equity}</div>
            <div>{handlePhoneFormat()}</div>
            <div>{selectedActor.feet}'</div>
            <div>{selectedActor.inches}''</div>
            <div>{format(selectedActor.birthday, 'MM/DD/YYYY')}</div>
          </div>
        )
      } else {
        return (
          <div>CurrentAppointment</div>
        )
      }
}


// picture of actor
// first_name
// last_name
// phone_number
// gender
// equity
// age
// feet 
// inches 
// b-day

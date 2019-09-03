import React, { useEffect } from 'react'
import format from 'date-fns/format'

export default function ActorAppointmentOptions(props){
  const { selectedActor } = props;

  function handlePhoneFormat(){
    let phone = selectedActor && selectedActor.phone_number.replace(/\D/g, "");
    const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      phone = `${match[1]}${match[2] ? "-" : ""}${match[2]}${
        match[3] ? "-" : ""
      }${match[3]}`;
    }
    return phone;
}

console.log(handlePhoneFormat())

      
      if (props.selectedActor) {
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="items-end">
                <div>
                  {`${selectedActor.first_name} ${selectedActor.last_name}, ${selectedActor.age}`}
                </div>
                <div>{selectedActor.equity ? "EQUITY" : null}</div>
              </div>
              <img
                className="h-24 w-24 bg-red-500"
                alt="A user with an appointment to audition"
                src={selectedActor.profile_uri}
              />
            </div>
            <div className="flex justify-between">
              <div>
                <div>{selectedActor.gender}</div>
                <div>{selectedActor.equity}</div>
                <div>{`${selectedActor.feet}' ${selectedActor.inches}''`}</div>
                <div>{format(selectedActor.birthday, "MM/DD/YYYY")}</div>
              </div>
              <div className="flex flex-col items-end">
                <div>{selectedActor.email}</div>
                <div>{handlePhoneFormat()}</div>
              </div>
            </div>
            <div className="flex justify-around mb-4">
              <button className="h-12 w-32 shadow-lg bg-blue-300 text-white border border-black rounded-lg">
                Monologues
              </button>
              <button className="h-12 w-32 shadow-lg bg-blue-300 text-white border border-black rounded-lg">
                Songs
              </button>
            </div>
          </div>
        );
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

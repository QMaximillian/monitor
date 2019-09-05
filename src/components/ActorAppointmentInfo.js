import React from 'react'
import format from 'date-fns/format'


export default function ActorAppointmentInfo(props){
  const { selectedAppointment: { user } } = props;


  function handlePhoneFormat(phone_number){
    let phone = phone_number.replace(/\D/g, "");
    const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      phone = `${match[1]}${match[2] ? "-" : ""}${match[2]}${
        match[3] ? "-" : ""
      }${match[3]}`;
    }
    return phone;
}

      
      if (user) {
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="items-end">
                <div>
                  {`${user.first_name} ${user.last_name}, ${user.age}`}
                </div>
                <div>{user.equity ? "EQUITY" : null}</div>
              </div>
              {/* <img
                className="h-24 w-24 bg-red-500"
                alt="A user with an appointment to audition"
                src={user.profile_uri}
              /> */}
              <i className="fas fa-user text-6xl"></i>
            </div>
            <div className="flex justify-between">
              <div>
                <div>{user.gender}</div>
                <div>{user.equity}</div>
                <div>{`${user.feet}' ${user.inches}''`}</div>
                <div>{format(user.birthday, "MM/DD/YYYY")}</div>
              </div>
              <div className="flex flex-col items-end">
                <div>{user.email}</div>
                <div>{handlePhoneFormat(user.phone_number)}</div>
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


  
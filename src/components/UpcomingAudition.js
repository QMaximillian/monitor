import React from 'react'

export default function UpcomingAudition(props){

    console.log(props)
    return (
      <div className="border border-teal-500 w-full">
        <div className="w-full">{props.audition.show_name}</div>
        <div className="w-full">{props.audition.begin_time}</div>
        <div className="w-full">{props.audition.end_time}</div>
      </div>
    );
}


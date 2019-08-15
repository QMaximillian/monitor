import React from 'react'
import { Link } from "react-router-dom"

export default function UpcomingAudition(props){

    return (
      <Link
        to={`monitor-audition/${props.audition.id}`}
      >
        <div className="border border-teal-500 w-full">
          <div className="w-full">{props.audition.show_name}</div>
          <div className="w-full">{props.audition.begin_time}</div>
          <div className="w-full">{props.audition.end_time}</div>
        </div>
      </Link>
    );
}






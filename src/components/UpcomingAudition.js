import React, { useState } from 'react'
import { Link } from "react-router-dom"
import format from 'date-fns/format'
import { useSpring, animated } from 'react-spring'

export default function UpcomingAudition(props){
  const [arrowHover, setArrowHover] = useState(false)
  const scaleArrow = useSpring({transform: arrowHover ? 'scale(1.05, 1)' : 'scale(1, 1)'})

    return (
      <div className="border border-m-purple-500 bg-white rounded relative h-48 flex flex-col justify-between">
        <div
          className="text-lg text-center px-2 py-1 mr-auto rounded border-t-0 border-l-0 border-m-purple-500 border"
          style={{ textShadow: "1px 0px #DCABDF, 1px  1px #fff" }}
        >
          Upcoming Audition
        </div>
        <div
          className="px-2 text-2xl"
          style={{ textShadow: "1px 0px #D4AF37, 1px  1px #fff" }}
        >
          {props.audition.show_name}
        </div>
        <div className="px-2">
          {format(props.audition.date, "dddd, MMMM Qo YYYY")}
        </div>
        <div className="px-2">
          {`${format(props.audition.begin_time, "H:mm a")} - ${format(
            props.audition.end_time,
            "H:mm a"
          )}`}
        </div>
        <animated.div style={scaleArrow}>
          <Link
            onMouseEnter={() => setArrowHover(true)}
            onMouseLeave={() => setArrowHover(false)}
            to={`monitor-audition/${props.audition.id}`}
          >
            <i className="pr-4 pb-1 absolute bottom-0 right-0 text-3xl text-m-purple-500 rounded fas fa-arrow-right" />
          </Link>
        </animated.div>
      </div>
    );
}






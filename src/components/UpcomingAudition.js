import React, { useState } from 'react'
import { Link } from "react-router-dom"
import format from 'date-fns/format'
import { useSpring, animated } from 'react-spring'

export default function UpcomingAudition(props){
  const [arrowHover, setArrowHover] = useState(false)
  const scaleArrow = useSpring({transform: arrowHover ? 'scale(1.05, 1)' : 'scale(1, 1)'})

    return (
      <div className="flex flex-col">
        <div className="border border-m-purple-500 px-4 py-2 bg-white rounded relative h-48 flex flex-col justify-between">
            <div className="text-2xl">Upcoming Audition</div>
            <div className="">{props.audition.show_name}</div>
            <div className="">
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
                <i class="absolute bottom-0 right-0 text-3xl text-m-purple-500 rounded fas fa-arrow-right" />
              </Link>
            </animated.div>
        </div>
      </div>
    );
}






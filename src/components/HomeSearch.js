import React, { useState } from 'react'
import TextBox from './TextBox'
import { Link } from "react-router-dom";


export default function HomeSearch(props){
    const [search, setSearch] = useState({search: {
    value: '', isValid: false
  }})

    return (
      <div id="left-side" className="w-full h-full">
        <div className="p-2 h-screen overflow-y-scroll">
          <TextBox
            type="text"
            name="search"
            value={search.search.value}
            onChange={({ name, value, isValid }) =>
              setSearch({
                [name]: { value, isValid }
              })
            }
            placeholder="Search past auditions you've monitored"
          />
          <div className="px-2">
            <div className="flex flex-wrap -mx-2 border-black border">
              {props.monitor_auditions.map(audition => {
                return (
                  <div
                    className="w-1/2 p-4 flex justify-center"
                    key={audition.id}
                  >
                    <Link
                      to={`monitor-audition/${audition.id}`}
                      className="border border-purple-500 h-32 w-full text-center"
                    >
                      {audition.show_name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
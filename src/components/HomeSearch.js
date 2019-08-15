import React, { useState } from 'react'
import TextBox from './TextBox'
import { Link } from "react-router-dom";
import { format } from "date-fns";


export default function HomeSearch(props){
    const [search, setSearch] = useState({search: {
    value: '', isValid: false
  }})
  console.log('props', props);
  
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
              {props.monitor_auditions.filter((audition) => (audition.show_name.match(search.search.value))).map(audition => {
                return (
                  <div
                    className="w-1/2 p-4 flex justify-center"
                    key={audition.id}
                  >
                    <Link
                      to={`monitor-audition/${audition.id}`}
                      className="relative bg-white rounded border border-purple-500 h-32 w-full"
                    >
                      <div className="ml-2 absolute bottom-0 left-0 text-2xl">
                        <i class="fas fa-theater-masks" />
                      </div>
                      <div className="bottom-0 right-0 mr-2 absolute text-2xl">
                        <div className="text-right">{audition.show_name}</div>
                        <div className="text-base text-right">
                          {format(
                            audition.date,
                            "dddd, MMMM Qo YYYY"
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
              
              }
            </div>
          </div>
        </div>
      </div>
    );
}
import React, { useState } from 'react'
import TextBox from './TextBox'
import { Link } from "react-router-dom";
import { format } from "date-fns";

export default function HomeSearch(props){
    const [search, setSearch] = useState({search: {
    value: '', isValid: false
  }})

  
  

    return (
      <div
        id="middle"
        className="w-full h-full"
        style={{ backgroundColor: "rgba(238, 223, 222, .15)" }}
      >
        <div className="px-2 pb-2 h-screen overflow-y-scroll">
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
            <div className="flex flex-wrap -mx-2">
              {props.monitor_auditions
                .sort((a, b) => {
                  return props.order.date === "ASC"
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
                })
                .filter(audition => {
                  return (
                    audition.show_name
                      .toLowerCase()
                      .match(search.search.value.toLowerCase()) &&
                    audition.state.match(
                      props.abbreviation && props.abbreviation.value
                    ) &&
                    props.dateCheck(audition.date)
                  );
                })
                .map(audition => {
                  return (
                    <div
                      className="w-1/2 p-4 flex justify-center"
                      key={audition.id}
                    >
                      <Link
                        to={`monitor-audition/${audition.id}`}
                        className="relative bg-white rounded border border-m-purple-500 h-32 w-full shadow-lg"
                      >
                        <div className="ml-2 absolute bottom-0 left-0 text-2xl">
                          <i className="fas fa-theater-masks" />
                        </div>
                        <div className="bottom-0 right-0 mr-2 absolute text-2xl">
                          <div className="text-right">
                            {audition.show_name}
                          </div>
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
                })}
            </div>
          </div>
        </div>
      </div>
    );
}
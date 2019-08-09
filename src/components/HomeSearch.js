import React, { useState } from 'react'
import TextBox from './TextBox'
import { Link } from "react-router-dom";


export default function HomeSearch(props){
    const [search, setSearch] = useState({search: {
    value: '', isValid: false
  }})

    return (
        <div id="left-side" className="w-2/3 h-full">
                      <div className="px-2">
                        <TextBox
                          type="text"
                          name="search"
                          value={search.search.value}
                          onChange={({
                            name,
                            value,
                            isValid
                          }) =>
                            setSearch({
                              [name]: { value, isValid }
                            })
                          }
                          placeholder="Search past auditions you've monitored"
                        />
                        <div className="flex -mx-2 flex-wrap py-2">
                          {props.monitor_auditions.map(
                              audition => {
                                return (
                                  <div className="w-1/2 px-2">
                                    <Link
                                      to={`monitor-audition/${
                                        audition.id
                                      }`}
                                    >
                                      <div
                                        key={audition.id}
                                        className="border border-black mx-4 text-center"
                                      >
                                        {audition.show_name}
                                      </div>
                                    </Link>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      </div>
                    </div>
    )
}
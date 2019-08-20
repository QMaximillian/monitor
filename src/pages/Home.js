import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import HomeSearch from '../components/HomeSearch'
import UpcomingAudition from '../components/UpcomingAudition'
import UpcomingAuditionInfo from '../components/UpcomingAuditionInfo'
import Filters from '../components/Filters'
import moment from "moment";
import { isWithinRange } from "date-fns";

function Home(props){

  const { loading, error, data } = useQuery(GET_VIEWER_HOME, { fetchPolicy: 'network-only'});
  
  const initialDateState = {beginDate: moment.unix(0), endDate: moment.unix(1703980800)}
  const [date, setDate] = useState(initialDateState)
  const [order, setOrder] = useState({ date: "ASC" });
  const [abbreviation, setAbbreviation] = useState();



  function clearAllFilters() {
    handleDateOrder("reset");
    setAbbreviation({ value: "", label: "Pick a state" });
    setDate(initialDateState);
  }



  

  function handleDateOrder(arg){
    if (arg === 'reset') {
      setOrder({date: 'ASC'})
      return; 
    } 
    if (order.date === "ASC") {
        setOrder({ date: "DESC" })
        return;
    } 
    else {
        setOrder({ date: "ASC" })
        return;
    }
  }

  function dateCheck(auditionDate) {
    if (date.beginDate > date.endDate) {
      setDate(initialDateState);
    } else {
      return isWithinRange(
        new Date(auditionDate),
        new Date(date.beginDate),
        new Date(date.endDate)
      );
    }
    return
  }

                if (loading) return 'Loading...'
                if(error) return error
                if (data && data.viewer) {
                  
                  return (
                    <div className="flex w-full h-full">
                      <div className="w-1/4 flex flex-col h-full">
                        <Filters abbreviation={abbreviation} clearAllFilters={clearAllFilters} date={date} setDate={setDate} handleDateOrder={handleDateOrder} order={order} setAbbreviation={setAbbreviation}/>
                      </div>
                      <div className="w-1/2 overflow-auto-y h-full">
                        <HomeSearch
                          order={order}
                          abbreviation={abbreviation}
                          monitor_auditions={data.viewer.monitor_auditions}
                          date={date}
                          dateCheck={dateCheck}
                        />
                      </div>
                      <div id="right" className="w-1/4 h-full flex flex-col justify-between">
                        <UpcomingAudition
                          audition={data.viewer.upcoming_audition}
                        />
                        <div className="mt-2 px-4 pt-4 h-full w-full border-b-0 border border-m-purple-500 rounded rounded-b-none">
                          <UpcomingAuditionInfo todos={data.viewer.upcoming_audition.todos} instructions={data.viewer.upcoming_audition.instructions} id={data.viewer.upcoming_audition.id} />
                        </div>
                      </div>
                    </div>
                  );
                }
                  
                
}

    const GET_VIEWER_HOME = gql`
      query {
        viewer {
          id
          first_name
          last_name
          email
          phone_number
          gender
          equity
          monitor_auditions {
            id
            show_name
            begin_time
            end_time
            street_num
            street_address
            city
            state
            zip_code
            date
          }
          upcoming_audition {
            id
            show_name
            begin_time
            end_time
            date
            instructions {
              id
              instruction
            }
            todos {
              id
              task
              completed
              audition_id
            }
          }
          roles {
            id
            role
          }
        }
      }
    `;

export default Home
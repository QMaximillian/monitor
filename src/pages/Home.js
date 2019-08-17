import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import HomeSearch from '../components/HomeSearch'
import UpcomingAudition from '../components/UpcomingAudition'
import Filters from '../components/Filters'
import moment from "moment";
import { isWithinRange } from "date-fns";

function Home(props){

  const { loading, error, data } = useQuery(GET_VIEWER_HOME, { fetchPolicy: 'network-only'});
  const [todos, setTodos] = useState([
    { task: "go to place", completed: false },
    { task: "do thing", completed: false },
    { task: "eat food", completed: false }
  ]);
  const initialDateState = {beginDate: moment.unix(0), endDate: moment()}
  const [date, setDate] = useState(initialDateState)
  const [order, setOrder] = useState({ date: "ASC" });
  const [abbreviation, setAbbreviation] = useState();



  function clearAllFilters() {
  handleDateOrder("reset");
  setAbbreviation({ value: "", label: "Pick a state" });
  setDate(initialDateState);
}



  function returnTodos(){
    const spreadTodos = [...todos]

    return spreadTodos
      .map(todo => {
        return(
            <div 
              onClick={() => {
                todo.completed = !todo.completed
                setTodos(spreadTodos)
              }} 
              className="flex items-center">
                <input type="checkbox" value={todo.completed} />
                <div>{todo.task}</div>
            </div>
        )
      })
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

  function upcomingAudition(auditions) {
    const futureAuditions = auditions
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .filter(audition => new Date(audition.date) > new Date());
    return futureAuditions[0];
  }

                if (loading) return 'Loading...'
                if(error) return error
                if (data && data.viewer) {

                  

                  return (
                    <div className="flex w-full h-full">
                      <div className="w-3/12 flex flex-col h-full">
                        <Filters abbreviation={abbreviation} clearAllFilters={clearAllFilters} date={date} setDate={setDate} handleDateOrder={handleDateOrder} order={order} setAbbreviation={setAbbreviation}/>
                      </div>
                      <div className="w-6/12 overflow-auto-y h-full">
                        <HomeSearch
                          order={order}
                          abbreviation={abbreviation}
                          monitor_auditions={data.viewer.monitor_auditions}
                          date={date}
                          dateCheck={dateCheck}
                        />
                      </div>
                      <div id="" className="w-3/12 h-full flex flex-col justify-between">
                        <UpcomingAudition
                          audition={
                            upcomingAudition(data.viewer.monitor_auditions)
                          }
                        />
                        <div className="my-2 pl-2 pt-2 h-full w-full border-b-0 border border-m-purple-500 rounded rounded-b-none">
                          <div className="text-center">
                          Instructions
                          </div>
                          <div className="flex flex-col">
                            
                          {returnTodos()}
                          </div>
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
        }
      }
    `;

export default Home
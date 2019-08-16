import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import HomeSearch from '../components/HomeSearch'
import UpcomingAudition from '../components/UpcomingAudition'
import Filters from '../components/Filters'

function Home(props){

  const { loading, error, data } = useQuery(GET_VIEWER_HOME, { fetchPolicy: 'network-only'});

  function handleDateOrder(arg){
    if (arg === 'reset') {
      setOrder({date: 'ASC'})
      return; 
    }
     
    if (order.date === "ASC") {
        setOrder({ date: "DESC" })
        return;
    } else {
        setOrder({ date: "ASC" })
        return;
    }
  }
    const [order, setOrder] = useState({date: 'ASC'})
    const [abbreviation, setAbbreviation] = useState()
    console.log(abbreviation)
                if (loading) return 'Loading...'
                if(error) return error
                if (data && data.viewer) {

                  return (
                    <div className="flex w-full h-full">
                      <div className="w-3/12 flex flex-col h-full">
                        <Filters handleDateOrder={handleDateOrder} order={order} setAbbreviation={setAbbreviation}/>
                      </div>
                      <div className="w-6/12 overflow-auto-y h-full">
                        <HomeSearch
                          order={order}
                          abbreviation={abbreviation}
                          monitor_auditions={data.viewer.monitor_auditions.slice(
                            1
                          )}
                        />
                      </div>
                      <div id="right-side" className="w-3/12 h-full flex flex-col justify-between">
                        <UpcomingAudition
                          audition={
                            data.viewer.monitor_auditions[0]
                          }
                        />
                        <div className="mt-2 h-full w-full border-b-0 border border-m-purple-500 rounded rounded-b-none">
                          Intructions
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
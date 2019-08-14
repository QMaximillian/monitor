import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import HomeSearch from '../components/HomeSearch'
import UpcomingAudition from '../components/UpcomingAudition'

function Home(props){

  const { loading, error, data } = useQuery(GET_VIEWER_HOME, { fetchPolicy: 'network-only'});
  

                if (loading) return 'Loading...'
                if (error) return `Error ${error}`
                if (data && data.viewer) {
                  return (
                    <div className="flex w-screen h-screen">
                      <div className="w-1/6">
                        <div id="filters">
                          <div>ASC</div>
                          <div>DESC</div>
                        </div>
                      </div>
                      <div className="w-3/6 overflow-auto-y">
                        <HomeSearch
                          monitor_auditions={data.viewer.monitor_auditions.slice(
                            1
                          )}
                        />
                      </div> 
                      <div id="right-side" className="w-2/6">
                        <UpcomingAudition
                          audition={
                            data.viewer.monitor_auditions[0]
                          }
                        />
                      </div>
                    </div>
                  );
                } else {
                  return <div>{console.log(data)}</div>
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
          }
        }
      }
    `;

export default Home
import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { getUserId } from '../lib/helpers';
import HomeSearch from './HomeSearch'
import UpcomingAudition from './UpcomingAudition'

function Home(){
  const id = getUserId()
  const { loading, data } = useQuery(GET_VIEWER_HOME, { variables: { id } });
  

                if (loading) return 'Loading...'
                return (
                  <div className="flex w-screen h-screen">
                    <div className="w-1/6">
                      OPTIONS
                    </div>
                    <div className="w-3/6 overflow-auto-y">
                      <HomeSearch
                        monitor_auditions={data.user.monitor_auditions.slice(
                          1
                        )}
                      />
                    </div>
                    <div id="right-side" className="w-2/6">
                      <UpcomingAudition audition={data.user.monitor_auditions[0]}/>
                    </div>
                  </div>
                );
    }

    const GET_VIEWER_HOME = gql`
      query user($id: ID!) {
        user(id: $id) {
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
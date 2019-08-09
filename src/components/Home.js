import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { getUserId } from '../lib/helpers';
import HomeSearch from './HomeSearch'
function Home(){
  const id = getUserId()
  const { loading, data } = useQuery(GET_VIEWER_HOME, { variables: { id } });
  

                if (loading) return 'Loading...'
                return (
                  <div className="flex w-full h-full">
                    <div className="h-full w-2/3">
                      <HomeSearch
                        monitor_auditions={data.user.monitor_auditions.slice(
                          1
                        )}
                      />
                    </div>
                    <div id="right-side" className="w-1/3">
                      {data.user.monitor_auditions[0].show_name}
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
          }
        }
      }
    `;

export default Home



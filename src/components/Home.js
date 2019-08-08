import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import { Link } from "react-router-dom";
import { getUserId } from '../lib/helpers';

function Home(){
  const id = getUserId()
  console.log(id)
const { loading, data } = useQuery(GET_VIEWER_HOME, { variables: { id } });

                return (
                  <div className="w-full flex items-center justify-center pb-6">
                    <div className="tile-grid w-full tile-grid-2 sm:tile-grid-4 md:tile-grid-5">
                      {/* {data.user.monitor_auditions.map(
                        audition => {
                          return (
                            <Link to={`monitor-audition/${audition.id}`}>
                              <div
                                key={audition.id}
                                className="border border-black mx-4 text-center"
                              >
                                {audition.show_name}
                              </div>
                            </Link>
                          );
                        }
                      )} */}
                      Hello
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



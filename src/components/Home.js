import React from 'react'
import { Query } from 'react-apollo'
import {getViewerId} from '../lib/helpers'
import gql from 'graphql-tag'
import { Link } from "react-router-dom";

class Home extends React.Component {

    render() {
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
                    </div>
                  </div>
                );
    }
  }

export default Home



import React from 'react'
import { Query } from 'react-apollo'
import {getViewerId} from '../lib/helpers'
import gql from 'graphql-tag'

class Home extends React.Component {

    render() {
      return (
          <Query
            query={GET_VIEWER_HOME}
            variables={{ id: getViewerId().id }}
          >
            {({ loading, error, data }) => {
              if (error) return error;
              if (loading) return "Loading...";
              if (data && data.user) {
                return (
                  <div>
                    {data.user.monitor_auditions.map(audition => {
                          return <div key={audition.id} className="border border-black">{audition.show_name}</div>;
                    })}
                  </div>
                );
              }
            }}
          </Query>
      )
    }
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
  }`

export default Home



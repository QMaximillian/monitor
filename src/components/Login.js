import React from 'react'
import TextBox from './TextBox'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { navigate } from '@reach/router'

class Login extends React.Component {
    state = {
        email: {value: '', isValid: false},
        password: {value: '', isValid: false}
    }
    
    handleInputChange = ({ value, name, isValid }) => {
        this.setState({
            [name]: {
                value,
                isValid
            }
        })
    }
    
    render(){
      let variableConfig = {variables: {email: this.state.email.value, password: this.state.password.value}}

        return (
          <Mutation mutation={LOGIN}>
            {(login) => {
              return (
                <div className="justify-center flex border-black border items-center h-screen">
                  <div className="bg-gray-500 mx-auto py-8 px-32 shadow-2xl rounded-lg">
                    <div className="flex flex-col flex-1 items-center">
                      <div>Monitor</div>
                      <div>Sign In to Your Audition</div>
                      <label
                        className="text-black text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <div className="mx-auto">
                        <TextBox
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={this.state.email.value}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <label
                        className="text-black text-sm font-bold mb-2 pt-5"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <TextBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password.value}
                        onChange={this.handleInputChange}
                      />
                      <button
                        onClick={async e => {

                            e.preventDefault();
                            e.stopPropagation();

                            const { data } = await login({
                              ...variableConfig
                            });
                            
                            if (data && data.login && data.login.token) {
                              console.log(data)
                              localStorage.setItem('token', data.login.token)
                              navigate(`/home`)
                              
                            }
                          
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          </Mutation>
        );
    }   
}

const LOGIN = gql`
  mutation login($email: String!, $password: String!) { 
    login(email: $email, password: $password) {
      id
      first_name
      last_name
      token
    }
  }
`

export default Login
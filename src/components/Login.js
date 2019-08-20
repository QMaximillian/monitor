import React, { useState } from 'react'
import TextBox from './TextBox'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'


function Login(props){
  

  
  const [email, setEmail] = useState({value: '', isValid: false})
  const [password, setPassword] = useState({value: '', isValid: false})
  const [redirect, setRedirect] = useState(false)
  const [login, {error}] = useMutation(LOGIN, {
    variables: {
      email: email.email && email.email.value,
      password: password.password && password.password.value
    },
    update: (cache, {data: {login}}) => {
      console.log(login)
      cache.writeQuery({
        query: GET_VIEWER,
        data: { viewer: login }
      })
    }
  });
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  async function handleLogin(event){
      event.preventDefault();
      const result = await login()

      try {
        if (
          result &&
          result.data &&
          result.data.login &&
          result.data.login.token
        ) {

          localStorage.setItem("token", result.data.login.token);
        }
      } catch (error) {
        console.log(error);
      }
    };


      
    if (error) return error
              return (
                <animated.div
                  style={fade}
                  className="justify-center flex items-center h-full w-full"
                >
                    <div className="flex flex-col flex-1 items-center">
                      <div>Sign In to Monitor</div>
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
                          value={email.email && email.email.value}
                          onChange={({ name, isValid, value }) =>
                            setEmail({
                              [name]: {
                                value,
                                isValid
                              }
                            })
                          }
                        />
                      </div>
                      <label
                        className="text-black text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <TextBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={
                          password.password &&
                          password.password.value
                        }
                        onChange={({ name, isValid, value }) =>
                          setPassword({
                            [name]: {
                              value,
                              isValid
                            }
                          })
                        }
                      />
                      <button onClick={handleLogin}>
                        Submit
                      </button>
                      {redirect ? <Redirect push to={"/home"} /> : null}
                    </div>
                </animated.div>
              );
    }   


const LOGIN = gql`
  mutation login($email: String!, $password: String!) { 
    login(email: $email, password: $password) {
      id
      first_name
      last_name
      email
      phone_number
      gender
      equity
      token
      roles {
        id
        role
      }
    }
  }
`
const GET_VIEWER = gql`
  query {
    viewer {
      id
      first_name
      last_name
      email
      phone_number
      gender
      equity
      roles {
        id
        role
      }
    }
  }
`;

export default Login
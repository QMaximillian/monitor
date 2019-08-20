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
  const [login] = useMutation(LOGIN, {
    variables: {
      email: email.email && email.email.value,
      password: password.password && password.password.value
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
      const result = await login();

      try {
        if (
          result &&
          result.data &&
          result.data.login &&
          result.data.login.token
        ) {
          localStorage.setItem("token", result.data.login.token);

setRedirect(true);

        }
      } catch (error) {
        console.log(error);
      }
    };


      

              return (
                <animated.div
                  style={fade}
                  className="justify-center flex items-center h-screen"
                >
                  <div className="bg-gray-500 mx-auto py-8 px-32 shadow-2xl rounded-lg border border-m-purple-500">
                    <div className="flex flex-col flex-1 items-center">
                      <div className="heebo text-2xl font-semibold">
                        Monitor
                      </div>
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
                        className="text-black text-sm font-bold mb-2 pt-5"
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
      token
    }
  }
`

export default Login
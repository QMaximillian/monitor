import React from 'react'
import TextBox from './TextBox'

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
        return (
          <div className="justify-center flex border-black border items-center h-screen">
            <div className="w-64 bg-gray-500 w-1/2 p-20">
              <div>Monitor</div>
              <div>Sign In to Your Audition</div>
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <TextBox
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email.value}
                onChange={this.handleInputChange}
              />
              <label
                className="block text-black text-sm font-bold mb-2 pt-5"
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
            </div>
          </div>
        );
    }
    
}

export default Login
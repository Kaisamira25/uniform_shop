import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      rememberPassword: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, including validation
    // You should also check if the password and confirmPassword match
  }

  render() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="Agree to the terms of service"
                name="Agree to the terms of service"
                checked={this.state.rememberPassword}
                onChange={this.handleInputChange}
              />
              <label htmlFor="rememberPassword" className="text-sm text-gray-700 ml-2">Agree to the terms of service</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

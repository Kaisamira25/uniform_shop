import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
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
    // Xử lý đăng nhập ở đây
  }

  render() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg"> {/* Thêm lớp shadow và rounded */}
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

          <form onSubmit={this.handleSubmit}>
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
              <input
                type="checkbox"
                id="rememberPassword"
                name="rememberPassword"
                checked={this.state.rememberPassword}
                onChange={this.handleInputChange}
              />
              <label htmlFor="rememberPassword" className="text-sm text-gray-700 ml-2">Remember password</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
              Login
            </button>
            <button onClick={handleClick} className="text-gray-600 text-sm mt-4">
              <p >
              Forgot password? <a href="#">click here</a>
              </p>
            </button>
          </form>
          <div className="mt-4 border-b border-gray-300 text-center relative">
            <span className="absolute left-1/2 top-1/2 bg-white px-3 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
              or
            </span>
          </div>
          <div className="mt-4">
            <div className="mt-4">
              <button className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600 w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="mr-2">
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1565c0" d="M43.611,20.083L43.595,20H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19-5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
               Login with Google
              </button>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="inline-block align-text-bottom mr-2">
                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                <path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
              </svg>
             login with Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const handleClick = () => {
  alert('quên mật khẩu');
};

export default Login;

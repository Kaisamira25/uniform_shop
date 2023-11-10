import React, { Component } from 'react';
import Checkboxlogin from '../../../components/Checkbox';
import GoogleLogin from './../../../components/LoginGG';
import ButtonLogin from '../../../components/ButtonLogin';
import FacebookLogin from './../../../components/LoginFB';
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

  }

  render() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Tên đăng nhập</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>

            <div>
              <Checkboxlogin />
            </div>
            <div>
              <ButtonLogin />
            </div>
            <button className="text-gray-600 text-sm mt-4">
              <p >
                <a href="#">  quên mật khẩu? </a>
              </p>
            </button>
          </form>
          <div className="mt-4 border-b border-gray-300 text-center relative">
            <span className="absolute left-1/2 top-1/2 bg-white px-3 transform -translate-x-1/2 -translate-y-1/2 text-gray-400">
              Hoặc
            </span>
          </div>
          <div className="mt-4">
            <div className="mt-4">
              <GoogleLogin />
            </div>
            <div className="mt-4">
              <FacebookLogin />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default Login;

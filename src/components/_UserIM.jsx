import React, { Component } from 'react';

class Username extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
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
      </form>
    );
  }
}

export default Username;

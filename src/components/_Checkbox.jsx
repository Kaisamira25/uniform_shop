

import React, { Component } from 'react';

class Checkboxlogin extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false, 
    };
  }

  handleCheckboxChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <div className="block text-sm font-medium text-gray-700" >
        <label>
    
          <input
            type="checkbox"
            id="myCheckbox"
            checked={this.state.isChecked} 
            onChange={this.handleCheckboxChange} 
          />
            <span className="ml-2">Ghi nhớ đăng nhập</span>
        </label>
      </div>
    );
  }
}

export default Checkboxlogin;

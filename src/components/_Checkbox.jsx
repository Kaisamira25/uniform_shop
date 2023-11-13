

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
           Ghi nhớ đăng nhập
        </label>
      </div>
    );
  }
}

export default Checkboxlogin;

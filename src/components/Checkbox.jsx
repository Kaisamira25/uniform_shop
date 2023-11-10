import React from 'react';

class Checkboxlogin extends Component {
  constructor() {
    super();
    this.state = {
      ghinho: false, 
    };
  }

  handleCheckboxChange = () => {
    this.setState({ ghinho: !this.state.ghinho }); 
  }

  render() {
    return (
      <div>
        <label  className="block text-sm font-medium text-gray-700">
         
          <input
            type="checkbox"
            id="Checkboxlogin"
            checked={this.state.ghinho}
            onChange={this.handleCheckboxChange} 
          />
          ghi nhớ đăng nhập
        </label>
      </div>
    );
  }
}

export default Checkboxlogin;

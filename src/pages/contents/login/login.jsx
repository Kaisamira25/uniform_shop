import React, { Component } from 'react';
import Username from '../../../components/_UserIM';
import Checkboxlogin from './../../../components/_Checkbox';
import ButtonLogin from './../../../components/_ButtonLogin';
import Forgotpassword from '../../../components/_Forgot';
import GoogleLogin from './../../../components/_LoginGG';
import FacebookLogin from './../../../components/_LoginFB';


class Login extends Component {
  render() {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
          <div>
            <ul>
              <li>
                <Username />
              </li>
              <li>
                <Checkboxlogin />
              </li>
              <li>
                <ButtonLogin />
              </li>
              <li>
             <Forgotpassword/>
              </li>
            </ul>
          </div>
          <div className="mt-4 border-b border-gray-300 text-center relative">
            <span className="font-bold absolute left-1/2 top-1/2 bg-white px-3 transform -translate-x-1/2 -translate-y-1/2 text-gray-900">
              Hoặc
            </span>
          </div>
          <div className="mt-4">
            <div className="mt-2">
              <GoogleLogin/>
            </div>
            <div className="mt-2">             
              <FacebookLogin/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default Login;
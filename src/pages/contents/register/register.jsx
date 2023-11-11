import React, { Component } from 'react';
import REGForm from '../../../components/_Regform';
import Buttonreg from '../../../components/_ButtonReg';


class Register extends Component {

    render() {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>


                    <div className="mb-4">
                        <ul>
                            <li>
                                <REGForm />
                            </li>
                            <li>
                                <Buttonreg />
                            </li>
                        </ul>

                    </div >


                </div>
            </div>
        );
    }
}

export default Register;

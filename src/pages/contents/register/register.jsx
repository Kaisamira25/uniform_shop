import React from 'react';
import REGForm from '../../../components/_Regform';
import Buttonreg from '../../../components/_ButtonReg';


export default function Register() {


    return (
        <div className="flex h-screen items-center justify-center">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Đăng kí </h2>


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




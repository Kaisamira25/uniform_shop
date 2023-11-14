
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLogin() {
  const handleClick = () => {
    
  }

  return (
    <Link to="/home">
    <button onClick={handleClick}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Đăng Nhập </button>
    </Link>
  );
}

export default ButtonLogin;

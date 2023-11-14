
import React from 'react';
import { Link } from 'react-router-dom';

function Buttonreg() {
  const handleClick = () => {
    
  }

  return (
    <Link to="/home">
      <button onClick={handleClick}  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Đăng Ký </button>
    </Link>
  );
}

export default Buttonreg;

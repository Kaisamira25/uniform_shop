import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#3D9FCE]">
      <div className="flex justify-between h-16 items-center px-4 sm:grid sm:grid-cols-4 container mx-auto">
        <Link to="/Home">
          <img
            className="w-11"
            src="/src/assets/icons/LogosWix.svg"
            alt="Logo"
          />
        </Link>
        <form action="" className="hidden sm:block sm:col-span-2">
          <input
            className="px-5 h-10 outline-none text-sm rounded-full w-full"
            type="text"
            placeholder="Tìm kiếm tại đây"
          />
        </form>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-white hover:underline">
            Đăng nhập
          </Link>
          <Link to="/register" className="text-white hover:underline">
            Đăng ký
          </Link>
          <Link to="/pay">
            <img
              className="w-8"
              src="src\assets\icons\cart-shopping-svgrepo-com.svg"
              alt="Giỏ hàng"
            />
          </Link>
        </div>
        <button className="sm:hidden">
          <img className="w-7" src="/src/assets/icons/MdiMenu.svg" alt="Menu" />
        </button>
      </div>
    </nav>
  );
}

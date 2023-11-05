import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#3D9FCE]">
      <div className="flex justify-between h-11 items-center px-3 sm:grid sm:grid-cols-4 container mx-auto">
        <img
          className="w-11 grid-"
          src="/src/assets/icons/LogosWix.svg"
          alt=""
        />
        <form action="" className="hidden sm:block sm:col-span-2">
          <input
            className="px-5 h-7 outline-none text-sm  rounded-full w-full"
            type="text"
            placeholder="Search here"
          />
        </form>
        <button className="sm:hidden">
          <img className="w-7" src="/src/assets/icons/MdiMenu.svg" alt="" />
        </button>
      </div>
    </nav>
  );
}

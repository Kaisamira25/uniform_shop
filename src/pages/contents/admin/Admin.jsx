import React, { useState } from "react";
import MenuAdmin from "../../../components/_MenuAdmin";
import ProductAdmin from "./ProductAdmin";
import UserAdmin from "./UserAdmin";
import OrderAdmin from "./OrderAdmin";

export default function Admin({ children }) {
  const [currentPage, setCurrentPage] = useState("OrderAdmin");

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admin-container grid grid-cols-1 lg:grid-cols-4">
      <div className="bg-amber-200 col-span-1 xl:w-4/5">
        <MenuAdmin />
      </div>
      <div className="col-span-3 bg-white xl:mr-28">
      { children }
      </div>
    </div>
  );
}

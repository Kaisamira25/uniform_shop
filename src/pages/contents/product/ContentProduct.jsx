import React from "react";
import Category from "../../../components/_Category";
import CardProduct from "../../../components/_CardProduct";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function ContentProduct() {
  return (
    <div className="space-y-4 mb-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div className="p-5 space-y-4 sm:col-span-1">
        <Category Title={"Category"} />
        <Category Title={"Category"} />
        <Category Title={"Category"} />
      </div>
      <div className="grid grid-cols-2 gap-5 sm:col-span-2 lg:col-span-3 lg:grid-cols-3 xl:grid-cols-4 xl:col-span-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}

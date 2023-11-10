import React from "react";

function CardProduct() {
  return (
    <div className="rounded p-5">
        <img className="outline-1 hover:bg-" src="/src/assets/imgs/shirt.jpg" alt="#" />
        <button className="bg-blue-300 hover:bg-blue-500 w-full h-10">
          Mua
        </button>
    </div>
  );
}
export default CardProduct;

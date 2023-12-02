import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllProduct } from "../services/UserService";

function CardProduct() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    let res = await fetchAllProduct();
    const allProduct = res.data;
    const foundProduct = allProduct.find((product) => product.category.id === Number(id));
    console.log(foundProduct)
    if (foundProduct) {
      setProductInfo(foundProduct);
    } else {
      console.log("Book not found");
    }
  };
  return (
    <div className="rounded p-5">
      {productInfo && (
        <>
          <img
            className="outline-1 hover:bg-"
            src={productInfo.category.image} 
            alt={productInfo.title}
          />
          <button className="bg-blue-300 hover:bg-blue-500 w-full h-10">Mua</button>
        </>
      )}
    </div>
  );
}
export default CardProduct;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllProduct } from "../../../services/UserService";

export default function Home() {
  const [listProduct, setListProduct] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let res = await fetchAllProduct();

    if (res.data) {
      setListProduct(res.data);
    }
  };
  console.log(listProduct);

  const categoryProducts = listProduct.filter(
    (product) => product.id >= 194 && product.id <= 204
  );

  const newestProducts = listProduct.filter(
    (product) => product.id >= 270 && product.id <= 285
  );

  return (
    <div className="home p-4 ">
      <div className="max-w-screen-xl mx-auto ">
        <h1 className="ml-4 border-b-4 mt-4 border-cyan-400 text-2xl font-bold">
          Danh mục sản phẩm
        </h1>
        <div className="flex flex-wrap ">
          {categoryProducts.map((product) => (
            <Link
              to={`/product/${product.category.id}`}
              key={product.id}
              className={`product ${
                hoveredProduct === product.category.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProduct(product.category.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/5 lg:w-1/2 xl:w-1/4 p-6"
              >
                <div className="image-card bg-gray-200  relative">
                  <img
                    src={product.category.image}
                    alt={product.category.name}
                    className="mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-center flex-col bg-black bg-opacity-50 ">
                    <h2 className="text-lg font-semibold text-white p-2 rounded-t-md">

                      {product.title}
                    </h2>
                    <button className="text-white px-4 py-2  bg-red-500 mb-3">
                      Xem tất cả
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h1 className="ml-4 border-b-4 mt-4 border-cyan-400 text-2xl font-bold">
          Sản phẩm mới nhất
        </h1>
        <Link to="/product">
          <div className="flex flex-wrap ">
            {newestProducts.map((product) => (
              <div
                key={product}
                className="w-full sm:w-1/2 md:w-1/5 lg:w-1/2 xl:w-1/4 p-6"
              >
                <div className="image-card bg-gray-200  relative">
                  <img
                    src={product.category.image}
                    alt={product.category.name}
                    className="mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-center flex-col bg-black bg-opacity-50">
                    <h2 className="text-lg font-semibold text-white p-2 rounded-t-md">

                      {product.title}

                    </h2>
                    <button className="text-white px-4 py-2  bg-red-500 mb-3">
                      Xem tất cả
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
}

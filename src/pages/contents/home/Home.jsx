import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const imageData = [
    {
      title: "Đồng phục cấp 1",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
    {
      title: "Đồng phục cấp 2",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
    {
      title: "Đồng phục cấp 3",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
    {
      title: "Đồng phục mầm non",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
    {
      title: "Đồng phục công sở",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
    {
      title: "Đồng phục áo thun",
      imageUrl:
        "https://dongphuctienbao.com/wp-content/uploads/2022/01/91.png.png",
    },
  ];

  return (
    <div className="home p-4 ">
      <div className="max-w-screen-xl mx-auto ">
        <h1 className="ml-4 border-b-4 mt-4 border-cyan-400 text-2xl font-bold">
          Danh mục sản phẩm
        </h1>
        <Link to="/product">
          <div className="flex flex-wrap ">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/5 lg:w-1/2 xl:w-1/4 p-6"
              >
                <div className="image-card bg-gray-200  relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-center flex-col bg-black bg-opacity-50 ">
                    <h2 className="text-lg font-semibold text-white p-2 rounded-t-md">
                      {item.title}
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
        <h1 className="ml-4 border-b-4 mt-4 border-cyan-400 text-2xl font-bold">
          Sản phẩm mới nhất
        </h1>
        <Link to="/product">
          <div className="flex flex-wrap ">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/5 lg:w-1/2 xl:w-1/4 p-6"
              >
                <div className="image-card bg-gray-200  relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-center flex-col bg-black bg-opacity-50">
                    <h2 className="text-lg font-semibold text-white p-2 rounded-t-md">
                      {item.title}
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

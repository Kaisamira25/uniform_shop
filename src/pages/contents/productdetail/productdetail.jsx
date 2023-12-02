import React, { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";
import Dathang from "../../../components/_dathang";
import { fetchAllProduct } from "../../../services/UserService";

export default function ImageGallery() {
  const [isThongBaoOpen, setThongBaoOpen] = useState(false);

  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProduct();
  }, [id]);
 

  const getProduct = async () => {
    let res = await fetchAllProduct();
    console.log(res);
    const allProduct = res.data;
    const foundProduct = allProduct.find(
      (product) => product.id === Number(id)
    );
    console.log(foundProduct)
    if (foundProduct) {
      setProductDetail(foundProduct);
      
    } else {
      console.log("Book not found");
    }
  };
  console.log(productDetail)
  const handleDatHangButtonClick = () => {
    // Xử lý logic đặt hàng

    setThongBaoOpen(true);
  };

  const handleCloseThongBao = () => {
    // Đóng  thông báo
    setThongBaoOpen(false);
  };

  return (
    <div className="flex p-8">
      <div className="w-1/2 pr-8">
      {productDetail && productDetail.category && (
          <img
            src={productDetail.category.image}
            alt="Large Image"
            className="w-1/2 h-auto object-cover mb-4"
          />
      )}
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Thông tin chi tiết</h2>
          <p>Áo thun xanh thể thao </p>
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="text-lg font-bold">Mẫu Chi Tiết</h3>
          <p>Thông tin chi tiết mẫu:</p>
          <p>
            vật liệu áo được là từ cotton chất lượng cao co dãn tốt đảm bảo cho
            người mặc thoái mái{" "}
          </p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleDatHangButtonClick}
          >
            Đặt hàng
          </button>
        </div>
        <div>
          <Dathang
            isOpen={isThongBaoOpen}
            onClose={handleCloseThongBao}
            onXacNhan={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

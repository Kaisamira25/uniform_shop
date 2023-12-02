import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Dathang from '../../../components/_dathang';


export default function ImageGallery() {
  const smallImages = [
    "src/assets/imgs/shirt.jpg",
    "src/assets/imgs/shirtback.jpg",
  ];

  const [largeImage, setLargeImage] = useState("src/assets/imgs/shirt.jpg");

  const [isThongBaoOpen, setThongBaoOpen] = useState(false);

  const handleSmallImageClick = (newImage) => {
    setLargeImage(newImage);
  };

  const handleDatHangButtonClick = () => { // Xử lý logic đặt hàng 
   
  
  
    setThongBaoOpen(true);
  };

  const handleCloseThongBao = () => {
    // Đóng  thông báo
    setThongBaoOpen(false);
  };

  return (
    <div className="flex p-8">

      <div className="w-1/2 pr-8">
        <img src={largeImage} alt="Large Image" className="w-1/2 h-auto object-cover mb-4" />

        <div className="flex">
          {smallImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small Image ${index + 1}`}
              className="w-1/5 h-auto object-cover mr-2 mb-2 cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Thông tin chi tiết</h2>
          <p>Áo thun xanh thể thao </p>
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="text-lg font-bold">Mẫu Chi Tiết</h3>
          <p>Thông tin chi tiết mẫu:</p>
          <p>vật liệu áo được là từ cotton chất lượng cao co dãn tốt  đảm bảo cho người mặc thoái mái   </p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <p>...</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleDatHangButtonClick}>
            Đặt hàng
          </button>
        </div>
        <div>
          <Dathang isOpen={isThongBaoOpen}
        onClose={handleCloseThongBao}
        onXacNhan={() => {
        }} />
        </div>
      </div>
    </div>
  );
}

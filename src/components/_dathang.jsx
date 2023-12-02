import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dathang = ({ isOpen, onClose, onXacNhan }) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleXacNhan = () => {

    navigate('/product');
    onClose();
  };
  const handleHuy = () => {
    navigate('/pay');
    onClose();
    // Sử dụng `navigate` để chuyển hướng

  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <p>Đặt hàng thành công!</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleXacNhan}
          >
            Tiếp tục mua
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleHuy}
          >
            giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dathang;

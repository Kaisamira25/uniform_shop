import React, { useState } from 'react';

// Đặt đoạn mã CartSummary vào một file mới (ví dụ: CartSummary.jsx)
const CartSummary = ({ total, handleCheckout }) => (
  <div className="flex justify-end items-center p-4">
    <div className="text-lg font-bold mr-4">Tổng cộng: ${total}</div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCheckout}>
      Thanh Toán
    </button>
  </div>
);

export default CartSummary;
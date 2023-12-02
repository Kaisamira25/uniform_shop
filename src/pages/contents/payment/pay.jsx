import React, { useState } from 'react';
import CartSummary from '../../../components/_paybutton';


export default function CartPage() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'đồng phục học sinh cấp 2',
            price: 50,
            quantity: 1,
            image: 'src/assets/imgs/shirt.jpg',
        },
   
    ]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const handleDecreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCart);
    };

    const handleIncreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold container mx-auto mt-8">Giỏ Hàng</h2>
            <div className="bg-white-200 container mx-auto p-4  rounded-lg shadow-xl">
                <table className="w-full table-fixed border-collapse border border-green-800">
                    <thead>
                        <tr className="bg-gray-400">
                            <th className="p-4 text-left text-lg">Tên Sản phẩm</th>
                            <th className="p-4 text-left text-lg"></th>
                            <th className="p-4 text-left text-lg">Giá</th>
                            <th className="p-4 text-left text-lg">Số lượng</th>
                            <th className="p-4 text-left text-lg">Thành tiền</th>
                            <th className="p-4 text-left text-lg">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="border border-gray-400">
                                <td className="p-4">{item.name}</td>
                                <td className="p-4 ">
                                    {<img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />}
                                </td>
                                <td className="p-4">${item.price}</td>
                                <td className="p-4">
                                    <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-700 text-sm">-</button>
                                    {item.quantity}
                                    <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-blue-500 text-white px-2 py-1 rounded-md focus:outline-none hover:bg-blue-700 text-sm">+</button>
                                </td>
                                <td className="p-4">${item.price * item.quantity}</td>
                                <td className="p-4">
                                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <CartSummary total={calculateTotal()} handleCheckout={() => console.log('Checkout logic here')} />
            </div>
        </div>
    );
}

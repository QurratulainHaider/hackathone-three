// src/components/CartPage.tsx
'use client';

import { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialItems: CartItem[] = [
  { id: 1, name: "Product 1", image: "/images/product1.png", price: 20, quantity: 1 },
  { id: 2, name: "Product 2", image: "/images/product2.png", price: 35, quantity: 2 },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [selectedItem, setSelectedItem] = useState<CartItem | null>(null);

  const selectItem = (item: CartItem) => {
    setSelectedItem(item);
  };

  const increaseQuantity = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id: number) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
    if (selectedItem && selectedItem.id === id) {
      setSelectedItem(null);
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="mb-8 text-2xl font-bold">My Cart</h1>
      <ul className="space-y-4 w-full max-w-lg">
        {items.map((item) => (
          <li key={item.id} onClick={() => selectItem(item)} className="p-4 bg-white shadow rounded flex justify-between items-center cursor-pointer">
            <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
            <div className="flex-grow ml-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>${item.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="mt-8 p-4 bg-white shadow rounded w-full max-w-lg">
          <h2 className="text-xl font-bold">{selectedItem.name}</h2>
          <Image src={selectedItem.image} alt={selectedItem.name} width={100} height={100} className="rounded mt-2" />
          <p>Price: ${selectedItem.price}</p>
          <p>Quantity: {selectedItem.quantity}</p>
        </div>
      )}
      <div className="mt-8 text-lg font-semibold">Total: ${totalPrice}</div>
    </div>
  );
}

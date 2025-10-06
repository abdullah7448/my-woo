"use client";

import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "@/lib/cartApi";
import { Product } from "@/types/type";

export default function CartDisplay() {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cart items
  const loadCart = async () => {
    setLoading(true);
    try {
      const data = await getCart();
      setCart(data.items);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const handleRemove = async (key: string) => {
    try {
      await removeFromCart(key);
      loadCart(); // refresh cart after removal
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;

  if (cart.length === 0) return <p>No cart items</p>;

  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.key} className="mb-2">
            <span>{item.name}</span> — 
            <span> Quantity: {item.quantity}</span> — 
            <span> Price: ${item.price}</span> — 
            <span> Total: ${item.total}</span>
            <button
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => handleRemove(item.key)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

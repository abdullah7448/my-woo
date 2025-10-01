// const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL + "/wc/store/v1";

// // Add product to cart
// export const addToCart = async (productId: number, quantity: number = 1) => {
//   const res = await fetch(`${API_BASE}/cart/add-item`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ id: productId, quantity }),
//     credentials: "include", // session cookie
//   });
//   return res.json();
// };

// // Get current cart
// export const getCart = async () => {
//   const res = await fetch(`${API_BASE}/cart`, {
//     credentials: "include",
//   });
//   return res.json();
// };

// // Remove item
// export const removeFromCart = async (itemKey: string) => {
//   const res = await fetch(`${API_BASE}/cart/remove-item/${itemKey}`, {
//     method: "POST",
//     credentials: "include",
//   });
//   return res.json();
// };


// lib/cartApi.ts
import { Product } from "@/types/type";

const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL
  ? process.env.NEXT_PUBLIC_WP_API_URL + "/wc/store/v1"
  : "";

// Helper to handle fetch errors
const handleResponse = async (res: Response) => {
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || "API request failed");
  }
  return res.json();
};

// Add product to cart
export const addToCart = async (productId: number, quantity: number = 1) => {
  if (!API_BASE) throw new Error("API_BASE is not defined");

  const res = await fetch(`${API_BASE}/cart/add-item`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: productId, quantity }),
    credentials: "include", // important for session tracking
  });
  console.log(res)
  return handleResponse(res);
 
};

// Get current cart
export const getCart = async (): Promise<{ items: Product[] }> => {
  if (!API_BASE) throw new Error("API_BASE is not defined");

  const res = await fetch(`${API_BASE}/cart`, {
    credentials: "include",
  });

  return handleResponse(res);
};

// Remove item from cart
export const removeFromCart = async (itemKey: string) => {
  if (!API_BASE) throw new Error("API_BASE is not defined");

  const res = await fetch(`${API_BASE}/cart/remove-item/${itemKey}`, {
    method: "POST",
    credentials: "include",
  });

  return handleResponse(res);
};

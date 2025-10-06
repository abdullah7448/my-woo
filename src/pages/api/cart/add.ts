// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { productId, quantity } = req.body;

//   const nonceRes = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wc/store/v1/cart`, {
//     credentials: 'include',
//   });

//   const nonce = nonceRes.headers.get('X-WC-Store-API-Nonce');
//   if (!nonce) return res.status(500).json({ message: 'Nonce not found' });

//   const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wc/store/v1/cart/add-item`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-WC-Store-API-Nonce': nonce!,
//     },
//     body: JSON.stringify({ id: productId, quantity }),
//     credentials: 'include',
//   });

//   const data = await response.json();
//   res.status(response.status).json(data);
// }


import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { productId, quantity } = req.body;
    if (!productId) return res.status(400).json({ message: "productId is required" });

    const WP_API = process.env.NEXT_PUBLIC_WP_API_URL;
    if (!WP_API) return res.status(500).json({ message: "NEXT_PUBLIC_WP_API_URL is not set" });

    // Forward browser cookies to WooCommerce
    const cookies = req.headers.cookie || "";

    // Step 1: Fetch cart to get nonce
    const nonceRes = await fetch(`${WP_API}/wc/store/v1/cart`, {
      headers: { cookie: cookies },
      credentials: "include",
    });

    const nonce = nonceRes.headers.get("X-WC-Store-API-Nonce");
    if (!nonce) {
      console.warn("Nonce not found. Cannot add item.");
      return res.status(500).json({ message: "Nonce not found" });
    }

    // Step 2: Add item to cart using nonce and forwarded cookies
    const addRes = await fetch(`${WP_API}/wc/store/v1/cart/add-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-WC-Store-API-Nonce": nonce,
        cookie: cookies,
      },
      body: JSON.stringify({ id: productId, quantity: quantity || 1 }),
      credentials: "include",
    });

    if (!addRes.ok) {
      const text = await addRes.text();
      console.error("Failed to add item:", text);
      return res.status(addRes.status).json({ message: "Failed to add item" });
    }

    const data = await addRes.json();
    res.status(200).json(data);
  } catch (error: any) {
    console.error("Error in /api/cart/add:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
}

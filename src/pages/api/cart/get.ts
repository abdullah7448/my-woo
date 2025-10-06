import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const WP_API = process.env.NEXT_PUBLIC_WP_API_URL;
    if (!WP_API) {
      return res.status(500).json({ message: "NEXT_PUBLIC_WP_API_URL is not set" });
    }

    // Forward browser cookies to WooCommerce so it knows the session
    const cookies = req.headers.cookie || "";

    // Step 1: Fetch cart to get nonce
    const nonceRes = await fetch(`${WP_API}/wc/store/v1/cart`, {
      headers: { cookie: cookies },
      credentials: "include",
    });

    if (!nonceRes.ok) {
      const text = await nonceRes.text();
      console.error("Failed to fetch nonce from WooCommerce:", text);
      return res.status(nonceRes.status).json({ message: "Failed to fetch nonce" });
    }

    const nonce = nonceRes.headers.get("X-WC-Store-API-Nonce");
    if (!nonce) {
      console.warn("Nonce not found in WooCommerce response headers. Returning empty cart.");
      return res.status(200).json({ items: [] });
    }

    // Step 2: Fetch actual cart with nonce and forwarded cookies
    const cartRes = await fetch(`${WP_API}/wc/store/v1/cart`, {
      headers: {
        "X-WC-Store-API-Nonce": nonce,
        cookie: cookies,
      },
      credentials: "include",
    });

    if (!cartRes.ok) {
      const text = await cartRes.text();
      console.error("Failed to fetch cart from WooCommerce:", text);
      return res.status(cartRes.status).json({ message: "Failed to fetch cart" });
    }

    const data = await cartRes.json();
    res.status(200).json(data);
  } catch (error: any) {
    console.error("Error in /api/cart/get:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
}

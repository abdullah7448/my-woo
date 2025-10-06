import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { itemKey } = req.body;

  const nonceRes = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wc/store/v1/cart`, {
    credentials: 'include',
  });

  const nonce = nonceRes.headers.get('X-WC-Store-API-Nonce');
  if (!nonce) return res.status(500).json({ message: 'Nonce not found' });

  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wc/store/v1/cart/remove-item/${itemKey}`, {
    method: 'POST',
    headers: {
      'X-WC-Store-API-Nonce': nonce!,
    },
    credentials: 'include',
  });

  const data = await response.json();
  res.status(response.status).json(data);
}

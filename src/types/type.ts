export interface Product {
    id: number;
    name: string;
    price: string;
    bg: string; // background color/gradient
  }

  // types/type.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
  bg: string; // background gradient
}

// WooCommerce API response (simplified)
export interface WooProductAPI {
  id: number;
  name: string;
  prices?: {
    price: string;
  };
  images?: { src: string }[];
}

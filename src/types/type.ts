// // export interface Product {
// //     id: number;
// //     name: string;
// //     price: string;
// //     bg: string; // background color/gradient
// //   }

//   // types/type.ts
// // export interface Product {
// //   id: number;
// //   name: string;
// //   price: string;
// //   image?: string;
// //   bg: string; // background gradient
// // }

// // WooCommerce API response (simplified)
// export interface WooProductAPI {
//   id: number;
//   name: string;
//   slug: string;
//   description?: string;
//   short_description?: string;
//   sku?: string;
//   price?: string;
//   regular_price?: string;
//   sale_price?: string;
//   stock_status?: "instock" | "outofstock" | "onbackorder";
//   images?: { src: string; alt?: string; name?: string }[];
//   categories?: { id: number; name: string; slug: string }[];
//   // you can add more fields if your theme/plugin uses them
// }

// // export interface WooProductAPI {
// //   id: number;
// //   name: string;
// //   prices?: {
// //     price: string;
// //   };
// //   images?: { src: string }[];
// // }

// // export interface Product {
// //   key: string;
// //   id: number;
// //   name: string;
// //   price: string;
// //   quantity: number;
// //   total: string;
// // }

//   export interface Product {
//     id: number;
//     key: string;  // change from string to number
//     name: string;
//     price: string;
//     image?: string;
//     quantity: number;
//     total: string;
//     bg: string;
//   }



// WooCommerce API response interface
export interface WooProductAPI {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  sku?: string;
  price?: string;
  regular_price?: string;
  sale_price?: string;
  stock_status?: "instock" | "outofstock" | "onbackorder";
  images?: { src: string; alt?: string; name?: string }[];
  categories?: { id: number; name: string; slug: string }[];
  // Add more fields if needed from your WooCommerce setup
}

// Simplified Product interface for frontend
export interface Product {
  id: number;
  key: string;       // React key, as string
  name: string;
  price: string;
  image?: string;
  quantity: number;  // default quantity
  total: string;     // price * quantity
  bg: string;        // UI background class
}

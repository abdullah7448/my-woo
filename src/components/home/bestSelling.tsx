// // components/BestSellingSection.js
// import ProductCard from "../product-card/product-card";

// export default function BestSellingSection() {
//   const products = [
//     { id: 1, name: "Fresh Fish Pack", price: "$25", bg: "bg-gradient-to-r from-blue-400 to-indigo-500" },
//     { id: 2, name: "Premium Meat", price: "$40", bg: "bg-gradient-to-r from-red-400 to-red-600" },
//     { id: 3, name: "Smart Gadget", price: "$120", bg: "bg-gradient-to-r from-gray-500 to-gray-700" },
//     { id: 4, name: "Cooking Set", price: "$60", bg: "bg-gradient-to-r from-orange-400 to-yellow-500" },
//     { id: 5, name: "Organic Food Box", price: "$35", bg: "bg-gradient-to-r from-green-400 to-emerald-600" },
//     { id: 6, name: "Trendy Fashion Wear", price: "$50", bg: "bg-gradient-to-r from-pink-400 to-fuchsia-600" },
//   ];

//   return (
//     <section className="py-12! bg-white">
//      <div className="container">
//      <div className=" mx-auto px-4!">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6! border-b-4 border-red-500 inline-block pb-2!">
//           Best Selling Products
//         </h2>

//         {/* Horizontal Scroll */}
//         <div className="flex gap-4 overflow-x-auto pb-4! scrollbar-none">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//      </div>
//     </section>
//   );
// }

// components/BestSellingSection.js

// components/BestSellingSection.tsx
// import ProductCard from "../product-card/product-card";
// import { Product, WooProductAPI } from "@/types/type";

// export default async function BestSellingSection() {
//   const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL + "/wc/v3/products";
//   const CONSUMER_KEY = process.env.WOO_CONSUMER_KEY!;
//   const CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET!;

//   // Fetch WooCommerce products
//   const res = await fetch(`${API_BASE}?per_page=10`, {
//     headers: {
//       Authorization:
//         "Basic " +
//         Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64"),
//     },
//   });

//   if (!res.ok) {
//     console.error("Failed to fetch products");
//     return <p>Failed to load products.</p>;
//   }

//   const data: WooProductAPI[] = await res.json(); // typed response

//   // Map WooCommerce API response to your Product type
//   const products: Product[] = data.map((item, index) => ({
//     id: item.id,
//     name: item.name,
//     price: item.prices?.price || "$0",
//     image: item.images?.[0]?.src,
//     bg: [
//       "bg-gradient-to-r from-blue-400 to-indigo-500",
//       "bg-gradient-to-r from-red-400 to-red-600",
//       "bg-gradient-to-r from-gray-500 to-gray-700",
//       "bg-gradient-to-r from-orange-400 to-yellow-500",
//       "bg-gradient-to-r from-green-400 to-emerald-600",
//       "bg-gradient-to-r from-pink-400 to-fuchsia-600",
//     ][index % 6],
//   }));

//   return (
//     <section className="py-12! bg-white">
//       <div className="container">
//         <div className="mx-auto px-4!">
//           <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6! border-b-4 border-red-500 inline-block pb-2!">
//             Best Selling Products
//           </h2>

//           {/* Horizontal Scroll */}
//           <div className="flex gap-4 overflow-x-auto pb-4! scrollbar-none">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/BestSellingSection.tsx
import ProductCard from "../product-card/product-card";
import { Product, WooProductAPI } from "@/types/type";

export default async function BestSellingSection() {
  try {
    const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL!;
    const CONSUMER_KEY = process.env.WOO_CONSUMER_KEY!;
    const CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET!;

    // Fetch products using query parameters
    const url = `${API_BASE}/wc/v3/products?per_page=10&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    console.log(url);
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch products", res.status, res.statusText);
      return <p>Failed to fetch products.</p>;
    }

    const data: WooProductAPI[] = await res.json();

    const products: Product[] = data.map((item, index) => ({
      id: item.id,
      name: item.name,
      price: item.prices?.price || "$0",
      image: item.images?.[0]?.src,
      bg: [
        "bg-gradient-to-r from-blue-400 to-indigo-500",
        "bg-gradient-to-r from-red-400 to-red-600",
        "bg-gradient-to-r from-gray-500 to-gray-700",
        "bg-gradient-to-r from-orange-400 to-yellow-500",
        "bg-gradient-to-r from-green-400 to-emerald-600",
        "bg-gradient-to-r from-pink-400 to-fuchsia-600",
      ][index % 6],
    }));

    return (
      <section className="py-12! bg-white">
        <div className="container">
          <div className="mx-auto px-4!">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6! border-b-4 border-red-500 inline-block pb-2!">
              Best Selling Products
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4! scrollbar-none">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return <p>Failed to fetch products.</p>;
  }
}

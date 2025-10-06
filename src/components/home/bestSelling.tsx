// components/BestSellingSection.tsx
import ProductCard from "../product-card/product-card";
import { Product, WooProductAPI } from "@/types/type";

export default async function BestSellingSection() {
  try {
    const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL!;
    const CONSUMER_KEY = process.env.WOO_CONSUMER_KEY!;
    const CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET!;

    // Fetch WooCommerce products
    const url = `${API_BASE}/wc/v3/products?per_page=10&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error("Failed to fetch products", res.status, res.statusText);
      return <p>Failed to fetch products.</p>;
    }

    const data: WooProductAPI[] = await res.json();

    // Map WooCommerce response to your Product type
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
      key: String(item.id),       // satisfy Product type
      quantity: 1,                // default quantity
      total: item.prices?.price || "$0", // default total
    }));

    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 border-b-4 border-red-500 inline-block pb-2">
            Best Selling Products
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return <p>Failed to fetch products.</p>;
  }
}

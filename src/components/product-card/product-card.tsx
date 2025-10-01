"use client";
import { Product } from "../../types/type";
import { addToCart } from "../../lib/cartApi";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart(product.id, 1);
      alert("✅ Product added to cart!");
    } catch (err) {
      alert("❌ Failed to add product to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-[200px] md:min-w-[250px] bg-white border rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col flex-shrink-0">
      <div className={`h-32 md:h-40 w-full rounded-t-xl ${product.bg}`}></div>

      <div className="p-3! flex flex-col flex-1">
        <h3 className="text-base md:text-lg font-medium mb-1 truncate">{product.name}</h3>
        <p className="text-gray-700 font-semibold mb-3!">{product.price}</p>

        <div className="flex gap-2 mt-auto">
          {/* <button
            onClick={() => alert('working on cart functionality')}
            className="flex-1 bg-blue-600 text-white py-1.5! rounded-md text-sm hover:bg-blue-700 transition"
          >
            Add to Cart
          </button> */}
          <button onClick={handleAddToCart} disabled={loading} 
          className="flex-1 bg-blue-600 text-white py-1.5! rounded-md text-sm hover:bg-blue-700 transition"
          >
            {loading ? "Adding..." : "Add to Cart"}
          </button>
          

          <Link
            href={`/products/${product.id}`}
            className="flex-1 border border-gray-300 py-1.5! rounded-md text-sm text-center hover:bg-gray-100 transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

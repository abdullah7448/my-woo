// src/app/search/page.tsx
import { Product, WooProductAPI } from "@/types/type";

interface SearchPageProps {
  searchParams?: { query?: string };
}

export default async function SearchResults({ searchParams }: SearchPageProps) {
  const query = searchParams?.query || "";

  const API_BASE = process.env.NEXT_PUBLIC_WP_API_URL!;
  const CONSUMER_KEY = process.env.WOO_CONSUMER_KEY!;
  const CONSUMER_SECRET = process.env.WOO_CONSUMER_SECRET!;

  if (!query) {
    return <p className="max-w-md mx-auto mt-10 text-gray-500">Please enter a search query.</p>;
  }

  const url = `${API_BASE}/wc/v3/products?search=${encodeURIComponent(
    query
  )}&consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch products:", res.status, res.statusText);
    return <p className="max-w-md mx-auto mt-10 text-red-500">Failed to fetch products.</p>;
  }

  const data: WooProductAPI[] = await res.json();

  const products: Product[] = data.map((item, index) => ({
    id: item.id,
    key: item.id.toString(),
    name: item.name,
    price: item.sale_price || item.regular_price || item.price || "$0",
    image: item.images?.[0]?.src,
    quantity: 1,
    total: item.sale_price || item.regular_price || item.price || "$0",
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
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h1>

      <ul>
        {products.length > 0 ? (
          products.map((item) => (
            <li key={item.key} className="border-b py-2">
              {item.name} - {item.price}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
}

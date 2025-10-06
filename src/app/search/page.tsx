// app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || ""; // ✅ safely handle possible null

  // Example static data
  const products = ["Apple", "Banana", "Carrot", "Dates", "Eggplant"];
  const results = products.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">
        Search Results for "{query}"
      </h1>

      <ul>
        {results.length > 0 ? (
          results.map((item, idx) => (
            <li key={idx} className="border-b py-2">
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
}

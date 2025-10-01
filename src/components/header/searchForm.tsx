// components/SearchForm.tsx
"use client";

import { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example search logic: static array
    const products = ["Apple", "Banana", "Carrot", "Dates", "Eggplant"];
    const filtered = products.filter((p) =>
      p.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <ul>
        {results.length > 0 ? (
          results.map((item, index) => (
            <li key={index} className="border-b py-1">
              {item}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No results</li>
        )}
      </ul>
    </div>
  );
}

// app/products/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params?.id as string; // ensure it's a string

  // Fetch product by ID (from your DB or static array)
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product {id} Details</h1>
      <p>Product description and details go here.</p>
    </div>
  );
}

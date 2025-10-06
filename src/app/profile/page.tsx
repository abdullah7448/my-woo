'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  slug: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/auth/me"); // your server route that reads cookie
        if (!res.ok) throw new Error("Not authenticated");

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        router.push("/login"); // redirect if not logged in
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {user && (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.slug}</p>
          <p><strong>Email:</strong> {user.email}</p>

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      )}
    </main>
  );
}

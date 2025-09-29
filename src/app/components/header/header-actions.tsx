"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

export default function HeaderActions() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Search for: ${searchQuery}`);
    // Replace alert with router push to a search page if needed
  };

  return (
    <div className={styles.headerActions}>
      {/* Search Bar */}
     
      {/* User Icon */}
      <Link href="/account" className={styles.iconButton}>
        👤
      </Link>

      {/* Cart Icon */}
      <Link href="/cart" className={styles.iconButton}>
        🛒
        <span className={styles.cartBadge}>3</span>
      </Link>

       <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          🔍
        </button>
      </form>

    </div>
  );
}

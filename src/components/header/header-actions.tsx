"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import SearchForm from "./searchForm";
import styles from "./header.module.css";

export default function HeaderActions() {
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert(`Search for: ${searchQuery}`);
  //   // Replace alert with router push to a search page if needed
  // };

  const [open, setOpen] = useState(false);
  return (
    <>
     <div className={styles.headerActions}>

     <button onClick={() => setOpen(true)}>
        <FontAwesomeIcon
          icon={faSearch}
          className="w-6 h-6 text-gray-600 cursor-pointer"
        />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50">
          <div className="bg-white p-6! mt-20 rounded-xl w-full max-w-2xl shadow-2xl relative animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            <SearchForm />
          </div>
        </div>
      )}
     
      <Link href="/account" className={styles.iconButton}>
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-600" />
      </Link>

      <Link href="/cart" className={styles.iconButton}>
      <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-gray-600" />
        <span className={styles.cartBadge}>3</span>
      </Link>

    </div>
    </>
   
  );
}

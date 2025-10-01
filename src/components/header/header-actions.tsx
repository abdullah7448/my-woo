"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import SearchModal from "../../components/header/searchModal";
//import SearchForm from "./searchForm";
import styles from "./header.module.css";


export default function HeaderActions() {
 // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert(`Search for: ${searchQuery}`);
  //   // Replace alert with router push to a search page if needed
  // };

  //const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
     <div className={styles.headerActions}>

     <Link href="/cart" className={styles.iconButton}>
      <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6  text-white" />
        <span className={styles.cartBadge}>3</span>
      </Link>

      <Link href="/account" className={styles.iconButton}>
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-white" />
      </Link>

       {/* Search Icon */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-gray-700 hover:text-gray-900"
        aria-label="Search"
      >
         <FontAwesomeIcon icon={faSearch} className="w-5.5! h-5.5! text-white cursor-pointer" />
      </button>

      {/* Search Modal */}
      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
    </>
   
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router alternative
import HeaderActions from "./header-actions";

export default function Header() {
  const pathname = usePathname(); // safer than useRouter for App Router
  const [open, setOpen] = useState(false);


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Fishes", path: "/fishes" },
    { name: "Meats", path: "/meats" },
    { name: "Kitchen", path: "/kitchen" },
    { name: "Gadgets", path: "/gadgets" },
    { name: "Fashion", path: "/fashions" },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <a href="/">
              <Image
              src="/images/logo.png"
              alt="FreshNTrend Logo"
              width={250}
              height={100}
              priority
              />
            </a>
          </div>

          {/* mobile nav button */}
          <button
              className={styles.menuButton}
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              >
                {open ? "✕" : "☰"}
            </button>

          {/* navbar  */}
          <div className={styles.navbar}>
            <nav className={`${styles.nav} ${open ? styles.show : ""}`}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.link} ${
                    pathname === item.path ? styles.active : ""
                  }`}
                  onClick={() => setOpen(false)} // close menu after click
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          
          <HeaderActions/>
        </div>
      </div>
    </header>
  );
}

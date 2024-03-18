"use client";

import styles from "@/styles/header.module.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const headerElement = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen((prev) => !prev);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  useEffect(() => {
    headerElement.current = document.querySelector("header");
    window.onscroll = () => {
      if (window.scrollY > 100) {
        headerElement.current.classList.add(styles.fixed);
      } else {
        headerElement.current.classList.remove(styles.fixed);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <header>
      <Link
        className={styles.logo}
        href="/"
        scroll={false}
        onClick={handleLinkClick}
      >
        Kim Rune Møller
      </Link>
      <nav>
        {/* This is the mobile menu */}
        <ul className={`${styles.navMenuMobile} ${menuOpen && styles.open}`}>
          <li>
            <Link
              className={`${styles.navLinkMobile} ${
                pathname === "/" ? styles.navLinkActive : ""
              }`}
              href={"/"}
              scroll={true}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLinkMobile} ${
                pathname === "/projects" ? styles.navLinkActive : ""
              } `}
              href={"/projects"}
              scroll={true}
              onClick={handleLinkClick}
            >
              Projects and stuff
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLinkMobile} ${
                pathname === "/about" ? styles.navLinkActive : ""
              } `}
              href={"/about"}
              scroll={true}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLinkMobile} ${
                pathname === "/contact" ? styles.navLinkActive : ""
              } `}
              href="/contact"
              scroll={true}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLinkMobile} ${
                pathname.toLowerCase().includes("/blog")
                  ? styles.navLinkActive
                  : ""
              } `}
              href="/blog"
              scroll={true}
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* This is the desktop menu */}
        <ul className={styles.navMenu}>
          <li>
            <Link
              className={`${styles.navLink} ${
                pathname === "/" ? styles.navLinkActive : ""
              } `}
              href={"/"}
              scroll={true}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${
                pathname === "/projects" ? styles.navLinkActive : ""
              } `}
              href={"/projects"}
              scroll={true}
              onClick={handleLinkClick}
            >
              Projects and stuff
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.navLinkActive : ""
              } `}
              href={"/about"}
              scroll={true}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.navLinkActive : ""
              } `}
              href="/contact"
              scroll={true}
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${
                pathname.toLowerCase().includes("/blog")
                  ? styles.navLinkActive
                  : ""
              } `}
              href="/blog"
              scroll={true}
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
        </ul>
        <button className={styles.menu} onClick={handleMenuClick}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M3.75 6.75h16.5" />
            <path d="M3.75 12h16.5" />
            <path d="M12 17.25h8.25" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

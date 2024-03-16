"use client";

import styles from "@/styles/header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link className={styles.logo} href="/">
        Kim Rune Møller
      </Link>
      <nav>
        <Link
          className={`${styles.navLink} ${
            pathname === "/" ? styles.navLinkActive : ""
          } ${styles.hiddenSm}`}
          href={"/"}
        >
          Home
        </Link>
        <Link
          className={`${styles.navLink} ${
            pathname === "/projects" ? styles.navLinkActive : ""
          } ${styles.hiddenSm}`}
          href={"/projects"}
        >
          Projects and stuff
        </Link>
        <Link
          className={`${styles.navLink} ${
            pathname === "/about" ? styles.navLinkActive : ""
          } ${styles.hiddenMd}`}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={`${styles.navLink} ${
            pathname === "/contact" ? styles.navLinkActive : ""
          } ${styles.hiddenMd}`}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={`${styles.navLink} ${
            pathname === "/blog" ? styles.navLinkActive : ""
          } ${styles.hiddenMd}`}
          href="/blog"
        >
          Blog
        </Link>
        <button className={styles.menu}>
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

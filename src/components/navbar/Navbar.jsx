import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/twitter.png" alt="twitter" width={24} height={24} />
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
      </div>
      <div className={styles.logo}>Secrets in My Diary</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>        
        <Link href="/" className={styles.link}>Contact</Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

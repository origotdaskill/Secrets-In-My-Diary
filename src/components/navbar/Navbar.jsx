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
        <a href="https://twitter.com/walidhorri9755" target="_blank" rel="noopener noreferrer">
        <Image src="/x.png" alt="twitter" width={24} height={24} /></a>
        <a href="https://www.linkedin.com/in/walid-horri-9ty/" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} /></a>
        <a href="https://github.com/origotdaskill" target="_blank" rel="noopener noreferrer">
        <Image src="/github.png" alt="linkedin" width={24} height={24} /></a>
      </div>
      <div className={styles.logo}>Secrets in My Diary</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>        
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

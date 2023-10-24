import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>Secrets in My Diary</h1>
        </div>
        <p className={styles.desc}>
        Welcome to this blog is personal blog that offers readers a glimpse into the intimate thoughts, experiences, and emotions of the author&apos;s life. Through beautifully crafted and heartfelt prose, the blog delves into a myriad of topics, including Web, Music, Coding , and some knoledge .</p>
        <div className={styles.icons}>
        <a href="https://twitter.com/walidhorri9755" target="_blank" rel="noopener noreferrer">
        <Image src="/x.png" alt="twitter" width={24} height={24} /></a>
        <a href="https://www.linkedin.com/in/walid-horri-9ty/" target="_blank" rel="noopener noreferrer">
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} /></a>
        <a href="https://github.com/origotdaskill" target="_blank" rel="noopener noreferrer">
        <Image src="/github.png" alt="linkedin" width={24} height={24} /></a>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=web">Web</Link>
          <Link href="/blog?cat=music">Music</Link>
          <Link href="/blog?cat=coding">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://twitter.com/walidhorri9755">Twitter</Link>
          <Link href="https://www.linkedin.com/in/walid-horri-9ty/">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

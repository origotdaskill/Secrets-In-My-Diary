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
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/twitter.png" alt="" width={18} height={18} />
          <Image src="/linkedin.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=web">Web</Link>
          <Link href="/blog?cat=music">Music</Link>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=hobbie">Hobbie</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

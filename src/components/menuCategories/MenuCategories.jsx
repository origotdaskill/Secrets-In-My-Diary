import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/blog?cat=web"className={`${styles.categoryItem} ${styles.web}`}>
        Web
      </Link>
      <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
      <Link href="/blog?cat=knowledge" className={`${styles.categoryItem} ${styles.knowledge}`}>
        Knowledge
      </Link>
      <Link href="/blog?cat=hobbie"className={`${styles.categoryItem} ${styles.hobbie}`}>
        Hobbie
      </Link>
      <Link href="/blog?cat=music" className={`${styles.categoryItem} ${styles.music}`}>
        Music
      </Link>
      <Link href="/blog?cat=multipurpose" className={`${styles.categoryItem} ${styles.multipurpose}`}>
        Multipurpose
      </Link>
    </div>
  );
};

export default MenuCategories;

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Embark in this journey</b>🌟 
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/cover.png" alt="" width={400} height={400} className={styles.image} />
        </div>
       
      </div>
    </div>
  );
};

export default Featured;

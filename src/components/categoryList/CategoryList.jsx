import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    const errorMessage = await res.text(); // Capture the error response body
    console.error("Error fetching categories:", errorMessage); // Log the error
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  return data; // Ensure this is an array
};

const CategoryList = async () => {
  let data = [];
  try {
    data = await getData();
    // Check if data is an array and log its structure
    console.log("Fetched categories data:", data);
  } catch (error) {
    console.error(error.message); // Log any errors during data fetch
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Link
              href={`/blog?cat=${item.slug}`} // Update to use item.slug for category
              className={`${styles.category} ${styles[item.slug]}`}
              key={item._id} // Assuming item has a unique ID
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title || "Category Image"} // Use a meaningful alt text
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title} {/* Assuming item has a title */}
            </Link>
          ))
        ) : (
          <p>No categories available.</p> // Fallback UI if no data
        )}
      </div>
    </div>
  );
};

export default CategoryList;

"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.login}>
          Sign-in
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.write}>
            Write
          </Link>
          <span className={styles.logout} onClick={signOut}>
            Sign-out
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Sign-in</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Sign-out</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

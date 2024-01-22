"use client";

import Link from "next/link";
import NavLink from "./navLink/Link";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const isAdmin = true;
  const session = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ path: "/admin", title: "Admin" }}>Admin</NavLink>
            )}
            <button className={styles.logout}>Login Out</button>
          </>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Links;

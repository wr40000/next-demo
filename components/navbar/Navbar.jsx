import Link from 'next/link'

import Links from "./links/Link";
import styles from "./navbar.module.css"

const NavbarPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default NavbarPage;

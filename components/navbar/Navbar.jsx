import Link from 'next/link'

import Links from "./links/Link";
import styles from "./navbar.module.css"
import { auth } from '@/lib/auth';

const NavbarPage = async() => {
  const session = await auth();
  console.log("session-NavbarPage: ", session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
};

export default NavbarPage;

import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './index.module.scss';
import { navs } from './config';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const router = useRouter;
  console.log(router);
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>BLOG-C</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link legacyBehavior key={nav?.label} href={nav?.value}>
            <a className="">{nav?.label}</a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navbar;

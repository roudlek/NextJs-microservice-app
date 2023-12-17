import Link from 'next/link';
import styles from './navbarcss.module.css'
export default function Navbar(){

  return(
<ul className={styles.navbar}>
<li>
  <Link href="/">Home</Link>
</li>
<li>
  <Link href="/perfumPage">Perfum</Link>
</li>
<li>
  <Link href="/listofpeople">list Of people</Link>
</li>
<li>
  <Link href="/bunch">Bunch</Link>
</li>
<li>
  <Link href="/about">About Us</Link>
</li>
<li>
  <Link href="/blog/hello_world" target='_blank'>Blog Post</Link>
</li>
<li>
  <Link href="/posts/first-post" >First Post</Link>
</li>
<li>
  <a href="https://www.google.com/" target='_blank'>Open G in new tab</a>
</li>
</ul>
  );
}
import Link from 'next/link';
import styles from './navbarcss.module.css'
export default function Navbar(){

  return(
<ul className={styles.navbar}>
<li>
  <Link href="/">Home</Link>
</li>
<li>
  <Link href="/products/productspage">Products fetch API</Link>
</li>
<li>
  <Link href="/perfumPage">Perfum responsive Design</Link>
</li>
<li>
  <Link href="/listofpeople">Map Users</Link>
</li>
<li>
  <Link href="/bunch">Nike sneakers list</Link>
</li>
<li>
  <Link href="/aboutme">About Me</Link>
</li>
<li>
  <Link href="/blog/hello_world">Blog Post</Link>
</li>
<li>
  <Link href="/posts/first-post" >First Post</Link>
</li>
{/* <li>
  <a href="https://www.google.com/" target='_blank' rel='noreferrer'>Open G in new tab</a>
</li> */}
</ul>
  );
}
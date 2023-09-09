import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <div className="navbar">
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading_text}>Bookstore CMS</h1>
        <nav className={styles.navigation}>
          <ul>
            <li><Link className="nav-link" to="/">Books</Link></li>
            <li><Link className="nav-link" to="/Categories">Categories</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.im_icon}>
        <ImUser />
      </div>
    </header>
  </div>
);

export default NavBar;

import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <header className="header">
      <h1 className="navbar-title">Book Store</h1>
      <nav className="nav">
        <Link className="nav-link" to="/">Books</Link>
        <Link className="nav-link" to="/Categories">Categories</Link>
      </nav>
    </header>
  </div>
);

export default NavBar;

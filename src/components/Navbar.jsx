import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import { useContext } from "react";
import { IsSignedInContext } from "../contexts/IsSignedIn";

export default function Navbar() {
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/random", label: "Other Words" },
  ];

  const handleClick = () => {
    setIsSignedIn((currVal) => !currVal);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {navLinks.map((link) => {
          return (
            <li key={link.label} className={styles.navbarItem}>
              <Link to={link.path} className={styles.navbarLink}>
                {link.label}
              </Link>
            </li>
          );
        })}
        <button className={styles.signinButton} onClick={handleClick}>
          Sign {isSignedIn ? "out" : "in"}
        </button>
      </ul>
    </nav>
  );
}

import logo from "../../assets/logo-header.png";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
export function Header() {
  return (
    <div>
      <header className={styles.container}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="React logo" />
        </Link>
      </header>
    </div>
  );
}

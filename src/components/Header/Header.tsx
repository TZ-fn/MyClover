import mainLogo from "assets/mainLogo.png";
import styles from "./Header.module.scss";
import NavigationList from "./NavigationList/NavigationList";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <span className="visually-hidden">Przejdź do strony głównej.</span>
        <img src={mainLogo} className={styles.mainLogo} alt="My Clover Logo" />
      </a>
      <NavigationList />
    </header>
  );
}

export default Header;

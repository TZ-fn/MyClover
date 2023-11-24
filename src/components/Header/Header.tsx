import mainLogo from "assets/mainLogo.png";
import NavigationList from "./NavigationList/NavigationList";
import styles from "./Header.module.scss";

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

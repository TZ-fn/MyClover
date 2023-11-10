import mainLogo from "assets/mainLogo.png";
import styles from "./Header.module.scss";
import NavigationList from "./NavigationList/NavigationList";

function Header() {
  return (
    <header className={styles.header}>
      <img src={mainLogo} className={styles.mainLogo} />
      <NavigationList />
    </header>
  );
}

export default Header;

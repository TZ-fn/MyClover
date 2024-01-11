import mainLogo from "assets/mainLogo.png";
import NavigationList from "./NavigationList/NavigationList";
import useTranslation from "hooks/useTranslation";
import styles from "./Header.module.scss";

function Header() {
  const [translation] = useTranslation();

  return (
    <header className={styles.header}>
      <a href="/">
        <span className="visually-hidden">{translation.header.mainLogoLink}</span>
        <img src={mainLogo} className={styles.mainLogo} alt={translation.header.mainLogoAlt} />
      </a>
      <NavigationList />
    </header>
  );
}

export default Header;

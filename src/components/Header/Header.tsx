import mainLogo from "assets/mainLogo.png";
import NavigationList from "./NavigationList/NavigationList";
import styles from "./Header.module.scss";
import useTranslation from "~/hooks/useTranslation";

function Header() {
  const [translation] = useTranslation();

  return (
    <header className={styles.header}>
      <a href="/">
        <span className="visually-hidden">{translation.layout.header.mainLogoLink}</span>
        <img src={mainLogo} className={styles.mainLogo} alt={translation.layout.header.mainLogoAlt} />
      </a>
      <NavigationList />
    </header>
  );
}

export default Header;

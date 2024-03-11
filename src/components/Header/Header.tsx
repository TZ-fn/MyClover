import { Link } from "react-router-dom";
import mainLogo from "assets/mainLogo.webp";
import NavigationList from "./NavigationList/NavigationList";
import useTranslation from "hooks/useTranslation";
import styles from "./Header.module.scss";

function Header() {
  const [translation] = useTranslation();

  return (
    <header className={styles.header}>
      <Link to="/">
        <span className="visually-hidden">{translation.header.mainLogoLink}</span>
        <img src={mainLogo} className={styles.mainLogo} alt={translation.header.mainLogoAlt} />
      </Link>
      <NavigationList />
    </header>
  );
}

export default Header;

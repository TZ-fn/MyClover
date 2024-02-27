import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import styles from "./NoMatch.module.scss";

function NoMatch() {
  const translation = useTranslation()[0].pages.noMatch;

  return (
    <div className={styles.noMatchContainer}>
      <h2 className={styles.noMatchHeader}>{translation.noMatchHeader}</h2>
      <p className={styles.noMatchText}>{translation.noMatchText}</p>
      <Link className={styles.returnToHome} to={"/"}>
        <svg className={styles.returnToHomeIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path
            d="m31.63 12.22-15-12a1 1 0 0 0-1.25 0l-15 12A1 1 0 0 0 1 14h2v17a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V14h2a1 1 0 0 0 .63-1.78zM18 30h-4v-8h4zm10-18a1 1 0 0 0-1 1v17h-7v-9a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v9H5V14h17v-2H3.85L16 2.28 28.15 12z"
            data-name="10-House"
          />
        </svg>
        {translation.returnToHome}
      </Link>
    </div>
  );
}

export default NoMatch;

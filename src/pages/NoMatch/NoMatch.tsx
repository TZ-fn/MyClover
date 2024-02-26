import useTranslation from "hooks/useTranslation";
import styles from "./NoMatch.module.scss";

function NoMatch() {
  const translation = useTranslation()[0].pages.noMatch;

  return (
    <div className={styles.noMatchContainer}>
      <h2 className={styles.noMatchHeader}>{translation.noMatchHeader}</h2>
      <p className={styles.noMatchText}>{translation.noMatchText}</p>
    </div>
  );
}

export default NoMatch;

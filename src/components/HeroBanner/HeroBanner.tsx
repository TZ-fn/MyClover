import useTranslation from "hooks/useTranslation";
import styles from "./HeroBanner.module.scss";

function HeroBanner() {
  const [translation] = useTranslation();

  return (
    <div>
      <div className={styles.heroOne}>
        <h2>{translation.pages.home.heroOneText}</h2>
      </div>
      <div className={styles.heroTwo}>
        <h2>{translation.pages.home.heroTwoText}</h2>
      </div>
    </div>
  );
}

export default HeroBanner;

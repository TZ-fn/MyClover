import heroImageOne from "assets/heroImageOne.png";
import heroImageTwo from "assets/heroImageTwo.png";
import useTranslation from "hooks/useTranslation";
import styles from "./HeroBanner.module.scss";
import { useEffect, useState } from "react";

function HeroBanner() {
  const [translation] = useTranslation();
  const [isFirstHeroActive, setIsFirstHeroActive] = useState(true);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setIsFirstHeroActive((isFirstHeroActive) => !isFirstHeroActive);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [isFirstHeroActive]);

  return (
    <div className={styles.mainWrapper}>
      {isFirstHeroActive && (
        <div className={styles.heroOne}>
          <h2 className={styles.heroTextOne}>{translation.pages.home.heroOneText}</h2>
          <img src={heroImageOne} alt="" className={styles.heroImageOne} />
        </div>
      )}
      {!isFirstHeroActive && (
        <div className={styles.heroTwo}>
          <h2 className={styles.heroTextTwo}>{translation.pages.home.heroTwoText}</h2>
          <img src={heroImageTwo} alt="" className={styles.heroImageTwo} />
        </div>
      )}
    </div>
  );
}

export default HeroBanner;

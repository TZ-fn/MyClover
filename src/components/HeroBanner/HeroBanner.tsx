import useTranslation from "hooks/useTranslation";
import styles from "./HeroBanner.module.scss";
import { useEffect, useState } from "react";

function HeroBanner() {
  const [translation] = useTranslation();
  const [isFirstHeroActive, setIsFirstHeroActive] = useState(true);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setIsFirstHeroActive((isFirstHeroActive) => !isFirstHeroActive);
    }, 3000);
    return () => clearInterval(heroInterval);
  }, [isFirstHeroActive]);

  return (
    <div>
      {isFirstHeroActive && (
        <div className={styles.heroOne}>
          <h2>{translation.pages.home.heroOneText}</h2>
        </div>
      )}
      {!isFirstHeroActive && (
        <div className={styles.heroTwo}>
          <h2>{translation.pages.home.heroTwoText}</h2>
        </div>
      )}
    </div>
  );
}

export default HeroBanner;

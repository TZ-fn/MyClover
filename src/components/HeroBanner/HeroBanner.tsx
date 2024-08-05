import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import heroImageOne from "assets/heroImageOne.webp";
import heroImageOneSmall from "assets/heroImageOneSmall.webp";
import heroImageTwo from "assets/heroImageTwo.webp";
import useTranslation from "hooks/useTranslation";
import styles from "./HeroBanner.module.scss";

function HeroBanner() {
  const [translation] = useTranslation();
  const [isFirstHeroActive, setIsFirstHeroActive] = useState(true);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setIsFirstHeroActive((isFirstHeroActive) => !isFirstHeroActive);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [isFirstHeroActive]);

  const defaultStyle = {
    transition: `transform 600ms ease-in-out, opacity 300ms ease-in-out`,
    transform: "scale(1)",
    opacity: "0",
  };

  const transitionStyles = {
    entering: { transform: "scale(1)", opacity: "0" },
    entered: { transform: "scale(1)", opacity: "1" },
    exiting: { transform: "scale(0)" },
    exited: { transform: "scale(0)" },
    unmounted: { transform: "scale(0)" },
  };

  return (
    <div className={styles.mainWrapper}>
      <Transition unmountOnExit in={isFirstHeroActive} timeout={200}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={styles.heroOne}
          >
            <h2 className={styles.heroTextOne}>{translation.pages.home.heroOneText}</h2>
            <img
              src={heroImageOne}
              srcSet={`${heroImageOneSmall} 480w, ${heroImageOne} 800w`}
              sizes="(max-width: 600px) 480px,
         800px"
              alt=""
              className={styles.heroImageOne}
            />
          </div>
        )}
      </Transition>
      <Transition unmountOnExit in={!isFirstHeroActive} timeout={200}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className={styles.heroTwo}
          >
            <h2 className={styles.heroTextTwo}>{translation.pages.home.heroTwoText}</h2>
            <img src={heroImageTwo} alt="" className={styles.heroImageTwo} />
          </div>
        )}
      </Transition>
    </div>
  );
}

export default HeroBanner;

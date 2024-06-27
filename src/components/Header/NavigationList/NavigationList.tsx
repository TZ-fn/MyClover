import { useState } from "react";
import { Transition } from "react-transition-group";
import NavigationItem from "./NavigationItem/NavigationItem";
import LanguageControlButton from "./LanguageControlButton/LanguageControlButton";
import useWindowDimensions from "hooks/useWindowDimensions";
import useTranslation from "hooks/useTranslation";
import Language from "types/Language";
import wasEnterPressed from "utils/wasEnterPressed";
import styles from "./NavigationList.module.scss";

function NavigationList() {
  const windowWidth = useWindowDimensions().width;
  const menuVisibilityBreakpoint = 800;
  const [isMenuVisible, setIsMenuVisible] = useState(windowWidth > menuVisibilityBreakpoint);
  const [translation, setCurrentLanguage] = useTranslation();

  function changeLanguage(language: Language) {
    setCurrentLanguage(language);
  }

  function handleMenuClick() {
    setIsMenuVisible((isMenuVisible) => !isMenuVisible);
  }

  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    transform: "translate(0, -350px)",
  };

  const transitionStyles = {
    entering: { transform: "translate(0)" },
    entered: { transform: "translate(0)" },
    exiting: { transform: "translate(0, -350px)" },
    exited: { transform: "translate(0, -350px)" },
    unmounted: { transform: "translate(0, -350px)" },
  };

  return (
    <nav className={styles.navigation}>
      {windowWidth < menuVisibilityBreakpoint && (
        <button onClick={handleMenuClick} className={styles.handleMenuBtn}>
          Menu
          <div className={!isMenuVisible ? styles.hamburger : styles.hamburgerOpen}></div>
        </button>
      )}
      <div className={styles.innerWrapper}>
        <Transition unmountOnExit in={isMenuVisible || windowWidth > menuVisibilityBreakpoint} timeout={200}>
          {(state) => (
            <>
              <ul
                className={styles.navList}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <NavigationItem handleMenuClick={handleMenuClick} address="/">
                  {translation.header.navigation.home}
                </NavigationItem>
                <NavigationItem handleMenuClick={handleMenuClick} address="/about">
                  {translation.header.navigation.about}
                </NavigationItem>
                <NavigationItem handleMenuClick={handleMenuClick} address="/offer">
                  {translation.header.navigation.offer}
                </NavigationItem>
                <NavigationItem handleMenuClick={handleMenuClick} address="/blog">
                  {translation.header.navigation.blog}
                </NavigationItem>
                <NavigationItem handleMenuClick={handleMenuClick} address="/contact" isHighlighted>
                  {translation.header.navigation.contact}
                </NavigationItem>
              </ul>
              <ul
                className={styles.navList}
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <LanguageControlButton
                  isActive={translation.name === "English"}
                  onKeyDown={(e) => (wasEnterPressed(e) ? changeLanguage("English") : null)}
                  onClick={() => changeLanguage("English")}
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                    alt="Flag of United Kingdom"
                  />
                  English
                </LanguageControlButton>
                <LanguageControlButton
                  isActive={translation.name === "Polish"}
                  onKeyDown={(e) => (wasEnterPressed(e) ? changeLanguage("Polish") : null)}
                  onClick={() => changeLanguage("Polish")}
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAPFBMVEX/8fH67Ozz5ubt4OD+/v77+/v39/fo2Nj5AAD+jo79bW36X1/4T0/5QUHhAAD3MzP0Kir2ICDzERHtAACO5h0ZAAAAQUlEQVR4AQXBsRHDMAwAMTzNwvuvm5MVIECIZIEQZ4EQ7AAIGBABegsR+Z7VxChx7hCjhIwYJcTydcgQ1gv8Lhd/58kJTU6WtnIAAAAASUVORK5CYII"
                    alt="Flag of Poland"
                  />
                  Polski
                </LanguageControlButton>
              </ul>
            </>
          )}
        </Transition>
      </div>
    </nav>
  );
}

export default NavigationList;

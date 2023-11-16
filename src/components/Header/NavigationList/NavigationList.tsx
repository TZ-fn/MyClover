import { useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationList.module.scss";
import useWindowDimensions from "hooks/useWindowDimensions";

function NavigationList() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const windowDimensions = useWindowDimensions();

  function handleMenu() {
    return setIsMenuVisible((isMenuVisible) => !isMenuVisible);
  }

  return (
    <nav className={styles.navigation}>
      {windowDimensions.width < 780 && (
        <button onClick={handleMenu} className={styles.handleMenuBtn}>
          Menu
        </button>
      )}

      {isMenuVisible && (
        <>
          <ul className={styles.navList}>
            <NavigationItem isActive>Home</NavigationItem>
            <NavigationItem>O nas</NavigationItem>
            <NavigationItem>Oferta</NavigationItem>
            <NavigationItem>Blog</NavigationItem>
            <NavigationItem isHighlighted>Kontakt</NavigationItem>
          </ul>
          <ul className={styles.navList}>
            <NavigationItem>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAt1BMVEWSmb66z+18msdig8La3u+tYX9IaLc7W7BagbmcUW+kqMr/q6n+//+hsNv/lIr/jIGMnNLJyOP9/fyQttT/wb3/////aWn+YWF5kNT0oqz0i4ueqtIZNJjhvt/8gn//WVr/6+rN1+o9RKZwgcMPJpX/VFT9UEn+RUX8Ozv2Ly+FGzdYZrfU1e/8LS/lQkG/mbVUX60AE231hHtcdMb0mp3qYFTFwNu3w9prcqSURGNDaaIUMX5FNW5wYt7AAAAAjklEQVR4AR3HNUJEMQCGwf+L8RR36ajR+1+CEuvRdd8kK9MNAiRQNgJmVDAt1yM6kSzYVJUsPNssAk5N7ZFKjVNFAY4co6TAOI+kyQm+LFUEBEKKzuWUNB7rSH/rSnvOulOGk+QlXTBqMIrfYX4tSe2nP3iRa/KNK7uTmWJ5a9+erZ3d+18od4ytiZdvZyuKWy8o3UpTVAAAAABJRU5ErkJggg=="
                alt="Flag of United Kingdom"
              />
              English
            </NavigationItem>
            <NavigationItem isActive>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAPFBMVEX/8fH67Ozz5ubt4OD+/v77+/v39/fo2Nj5AAD+jo79bW36X1/4T0/5QUHhAAD3MzP0Kir2ICDzERHtAACO5h0ZAAAAQUlEQVR4AQXBsRHDMAwAMTzNwvuvm5MVIECIZIEQZ4EQ7AAIGBABegsR+Z7VxChx7hCjhIwYJcTydcgQ1gv8Lhd/58kJTU6WtnIAAAAASUVORK5CYII"
                alt="Flag of Poland"
              />
              Polski
            </NavigationItem>
          </ul>
        </>
      )}
    </nav>
  );
}

export default NavigationList;

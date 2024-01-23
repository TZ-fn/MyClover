import { useState } from "react";
import { Transition } from "react-transition-group";
import useTranslation from "hooks/useTranslation";
import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import postMiniatures from "../../assets/postsMiniatures";
import styles from "./PostsGallery.module.scss";

export default function PostsGallery() {
  const [galleryIndexes, setGalleryIndexes] = useState([0, 1, 2]);
  const [activeGalleryButton, setActiveGalleryButton] = useState(1);
  const [translation] = useTranslation();

  function handleGalleryControls(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setActiveGalleryButton(Number((e.target as HTMLButtonElement).id));
  }

  const defaultStyle = {
    transition: `transform 1600ms ease-in-out, opacity 1300ms ease-in-out`,
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
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        {translation.pages.posts.map((post, index) => {
          if (galleryIndexes.includes(index)) {
            return (
              <Transition key={index} in={galleryIndexes.includes(index)} unmountOnExit timeout={1200}>
                {(state) => (
                  <PostsGalleryItem
                    miniature={postMiniatures[index]}
                    descriptionHeader={post.descriptionHeader}
                    description={post.description}
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state],
                    }}
                  />
                )}
              </Transition>
            );
          }
        })}
      </ul>
      <div className={styles.postsGalleryPagination}>
        {translation.pages.posts.length > 3 && (
          <button
            onClick={(e) => {
              handleGalleryControls(e);
              setGalleryIndexes(() => [0, 1, 2]);
            }}
            id="1"
            className={activeGalleryButton === 1 ? styles.active : ""}
          >
            1
          </button>
        )}
        {translation.pages.posts.length > 3 && (
          <button
            onClick={(e) => {
              handleGalleryControls(e);
              setGalleryIndexes(() => [3, 4, 5]);
            }}
            id="2"
            className={activeGalleryButton === 2 ? styles.active : ""}
          >
            2
          </button>
        )}
        {translation.pages.posts.length > 6 && (
          <button
            onClick={(e) => {
              handleGalleryControls(e);
              setGalleryIndexes(() => [6, 7, 8]);
            }}
            id="3"
            className={activeGalleryButton === 3 ? styles.active : ""}
          >
            3
          </button>
        )}
      </div>
    </div>
  );
}

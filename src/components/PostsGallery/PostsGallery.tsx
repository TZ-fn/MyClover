import { useState } from "react";
import useTranslation from "hooks/useTranslation";
import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import styles from "./PostsGallery.module.scss";
import postMiniatures from "../../assets/postsMiniatures";

export default function PostsGallery() {
  const [galleryIndexes, setGalleryIndexes] = useState([0, 1, 2]);
  const [activeGalleryButton, setActiveGalleryButton] = useState(1);
  const [translation] = useTranslation();

  function handleGalleryControls(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setActiveGalleryButton(Number((e.target as HTMLButtonElement).id));
  }

  return (
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        {translation.pages.posts.map((post, index) => {
          if (galleryIndexes.includes(index)) {
            return (
              <PostsGalleryItem
                key={index}
                miniature={postMiniatures[index]}
                descriptionHeader={post.descriptionHeader}
                description={post.description}
              />
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

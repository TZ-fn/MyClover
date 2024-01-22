import { useState } from "react";
import useTranslation from "hooks/useTranslation";
import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import styles from "./PostsGallery.module.scss";
import postMiniatures from "../../assets/postsMiniatures";

export default function PostsGallery() {
  const [activePage, setActivePage] = useState(1);
  const [translation] = useTranslation();

  function handleGalleryControls(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    return setActivePage(Number((e.target as HTMLButtonElement).id));
  }

  return (
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        {translation.pages.posts.map((post, index) => {
          if (activePage === 1 && index >= 0 && index < 3) {
            return (
              <PostsGalleryItem
                key={index}
                miniature={postMiniatures[index]}
                descriptionHeader={post.descriptionHeader}
                description={post.description}
              />
            );
          } else if (activePage === 2 && index >= 3 && index < 6) {
            return (
              <PostsGalleryItem
                key={index}
                miniature={postMiniatures[index]}
                descriptionHeader={post.descriptionHeader}
                description={post.description}
              />
            );
          } else if (activePage === 3 && index >= 6 && index < 7) {
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
          <button onClick={(e) => handleGalleryControls(e)} id="1" className={activePage === 1 ? styles.active : ""}>
            1
          </button>
        )}
        {translation.pages.posts.length > 3 && (
          <button onClick={(e) => handleGalleryControls(e)} id="2" className={activePage === 2 ? styles.active : ""}>
            2
          </button>
        )}
        {translation.pages.posts.length > 6 && (
          <button onClick={(e) => handleGalleryControls(e)} id="3" className={activePage === 3 ? styles.active : ""}>
            3
          </button>
        )}
      </div>
    </div>
  );
}

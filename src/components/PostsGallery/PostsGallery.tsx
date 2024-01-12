import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import styles from "./PostsGallery.module.scss";
import { useState } from "react";

export default function PostsGallery() {
  const [activePage, setActivePage] = useState(1);

  function handleGalleryControls(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    return setActivePage(Number((e.target as HTMLButtonElement).id));
  }

  return (
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        <PostsGalleryItem />
        <PostsGalleryItem />
        <PostsGalleryItem />
      </ul>
      <div className={styles.postsGalleryPagination}>
        <button onClick={(e) => handleGalleryControls(e)} id="1" className={activePage === 1 ? styles.active : ""}>
          1
        </button>
        <button onClick={(e) => handleGalleryControls(e)} id="2" className={activePage === 2 ? styles.active : ""}>
          2
        </button>
        <button onClick={(e) => handleGalleryControls(e)} id="3" className={activePage === 3 ? styles.active : ""}>
          3
        </button>
      </div>
    </div>
  );
}

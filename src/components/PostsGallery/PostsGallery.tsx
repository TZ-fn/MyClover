import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import styles from "./PostsGallery.module.scss";

export default function PostsGallery() {
  return (
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        <PostsGalleryItem />
        <PostsGalleryItem />
        <PostsGalleryItem />
      </ul>
      <div className={styles.postsGalleryPagination}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
}

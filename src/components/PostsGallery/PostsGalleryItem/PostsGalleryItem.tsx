import image from "assets/posts/vacations.jpg";
import styles from "./PostsGalleryItem.module.scss";

export default function PostsGalleryItem() {
  return (
    <li className={styles.itemContainer}>
      <img className={styles.itemPhoto} src={image} alt="" />
      <div className={styles.itemDescription}>
        <h3 className={styles.descriptionHeader}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem aperiam.
        </p>
      </div>
    </li>
  );
}

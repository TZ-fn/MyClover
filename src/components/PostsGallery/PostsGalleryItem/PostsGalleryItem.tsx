import styles from "./PostsGalleryItem.module.scss";

interface PostsGalleryItemProps {
  miniature: string;
  descriptionHeader: string;
  description: string;
}

export default function PostsGalleryItem({ miniature, descriptionHeader, description }: PostsGalleryItemProps) {
  return (
    <li className={styles.itemContainer}>
      <img className={styles.itemPhoto} src={miniature} alt="" />
      <div className={styles.itemDescription}>
        <h3 className={styles.descriptionHeader}>{descriptionHeader}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}

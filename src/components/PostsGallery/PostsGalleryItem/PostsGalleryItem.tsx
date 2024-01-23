import styles from "./PostsGalleryItem.module.scss";

interface PostsGalleryItemProps {
  miniature: string | undefined;
  descriptionHeader: string;
  description: string;
  style: React.CSSProperties | undefined;
}

export default function PostsGalleryItem({ miniature, descriptionHeader, description, style }: PostsGalleryItemProps) {
  return (
    <li style={style} className={styles.itemContainer}>
      <img className={styles.itemPhoto} src={miniature} alt="" />
      <div className={styles.itemDescription}>
        <h3 className={styles.descriptionHeader}>{descriptionHeader}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}

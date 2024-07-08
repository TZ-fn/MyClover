import { Link } from "react-router-dom";
import styles from "./PostsGalleryItem.module.scss";

interface PostsGalleryItemProps {
  miniature: string | undefined;
  descriptionHeader: string;
  description: string;
  link: string;
  style?: React.CSSProperties | undefined;
}

export default function PostsGalleryItem({
  miniature,
  descriptionHeader,
  description,
  link,
  style,
}: PostsGalleryItemProps) {
  return (
    <li className={styles.itemContainer} style={style}>
      <Link to={link}>
        <img className={styles.itemPhoto} src={miniature} alt="" />
        <div className={styles.itemDescription}>
          <h3 className={styles.descriptionHeader}>{descriptionHeader}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </Link>
    </li>
  );
}

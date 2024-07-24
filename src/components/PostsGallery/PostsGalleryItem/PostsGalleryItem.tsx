import { Link } from "react-router-dom";
import styles from "./PostsGalleryItem.module.scss";
import useTranslation from "hooks/useTranslation";

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
  const [translation] = useTranslation();
  return (
    <li className={styles.itemContainer} style={style}>
      <Link to={link}>
        <img className={styles.itemPhoto} loading="lazy" src={miniature} alt="" />
        <div className={styles.itemDescription}>
          <h3 className={styles.descriptionHeader}>{descriptionHeader}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <p className={styles.seeMore}>
          {translation.seeMore} <span className={styles.seeMoreArrow}>{" >"}</span>
        </p>
      </Link>
    </li>
  );
}

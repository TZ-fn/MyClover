import styles from "./ImageHeader.module.scss";

interface ImageHeaderProps {
  pageName: string;
  backgroundImage: string;
}

function ImageHeader({ pageName, backgroundImage }: ImageHeaderProps) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.imageHeaderContainer}>
      <h2 className={styles.pageHeader}>My Clover</h2>
      <p className={styles.dotDivider}>•</p>
      <h3 className={styles.pageName}>{pageName}</h3>
    </div>
  );
}

export default ImageHeader;

import styles from "./ImageHeader.module.scss";

interface ImageHeaderProps {
  textHeader: string;
  pageName: string;
}

function ImageHeader({ textHeader, pageName }: ImageHeaderProps) {
  return (
    <div className={styles.imageHeaderContainer}>
      <h2>{textHeader}</h2>
      <h3>{pageName}</h3>
      <div className={styles.bannerDivider}></div>
    </div>
  );
}

export default ImageHeader;

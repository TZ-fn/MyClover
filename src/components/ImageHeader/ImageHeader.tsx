import styles from "./ImageHeader.module.scss";

interface ImageHeaderProps {
  pageName: string;
  backgroundImage: string;
}

function ImageHeader({ pageName, backgroundImage }: ImageHeaderProps) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className={styles.imageHeaderContainer}>
      <h2>My Clover</h2>
      <h3>{pageName}</h3>
    </div>
  );
}

export default ImageHeader;

import ImageDivider from "components/ImageDivider/ImageDivider";
import styles from "./ImageHeader.module.scss";

interface ImageHeaderProps {
  pageName: string;
  backgroundImage: string;
}

function ImageHeader({ pageName, backgroundImage }: ImageHeaderProps) {
  return (
    <div className={styles.imageHeaderContainer}>
      <img src={backgroundImage} alt="" />
      <h2>My Clover</h2>
      <h3>{pageName}</h3>
      <ImageDivider isUpwards={false} />
    </div>
  );
}

export default ImageHeader;

import useTranslation from "hooks/useTranslation";
import ImageDivider from "components/ImageDivider/ImageDivider";
import styles from "./ImageBanner.module.scss";

export default function ImageBanner() {
  const [translation] = useTranslation();

  return (
    <div className={styles.imageBannerContainer}>
      <ImageDivider isUpwards />
      <p className={styles.imageBannerText}>{translation.pages.home.bgImageText}</p>
    </div>
  );
}

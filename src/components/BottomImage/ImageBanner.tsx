import useTranslation from "hooks/useTranslation";
import styles from "./ImageBanner.module.scss";

export default function ImageBanner() {
  const [translation] = useTranslation();

  return (
    <div className={styles.imageBannerContainer}>
      <div className={styles.imageBannerDivider}></div>
      <p className={styles.imageBannerText}>{translation.pages.home.bgImageText}</p>
    </div>
  );
}

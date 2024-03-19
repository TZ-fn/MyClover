import useTranslation from "hooks/useTranslation";
import ImageDivider from "components/ImageDivider/ImageDivider";
import styles from "./ImageBanner.module.scss";

export default function ImageBanner() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageDivider isUpwards />
      <div className={styles.imageBannerContainer}>
        <p className={styles.imageBannerText}>{translation.pages.home.bgImageText}</p>
      </div>
    </>
  );
}

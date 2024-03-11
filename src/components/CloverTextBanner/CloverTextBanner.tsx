import useTranslation from "hooks/useTranslation";
import cloverSeparator from "../../assets/clover-separator.webp";
import styles from "./CloverTextBanner.module.scss";

export default function CloverTextBanner() {
  const [translation] = useTranslation();

  return (
    <div className={styles.textBannerContainer}>
      <div className={styles.textBannerInnerContainer}>
        <h3 className={styles.bannerHeader}>Clover - Family Cover</h3>
        <img src={cloverSeparator} className={styles.bannerSeparator} alt="" />
        <p className={styles.bannerText}>
          {translation.pages.home.aboutBanner}
          <span className={styles.bannerTextSpecial}>{translation.pages.home.aboutBannerTextSpecial}</span>
        </p>
      </div>
    </div>
  );
}

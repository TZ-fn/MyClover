import styles from "./TextBanner.module.scss";

export default function TextBanner({ header, mainText }) {
  return (
    <div className={styles.textBannerContainer}>
      <div className={styles.textBannerInnerContainer}>
        <h3 className={styles.bannerHeader}>{header}</h3>
        <p className={styles.bannerText}>{mainText}</p>
      </div>
    </div>
  );
}

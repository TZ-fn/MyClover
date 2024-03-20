import styles from "./TextBanner.module.scss";

interface TextBannerProps {
  header: string;
  mainText: string;
}

export default function TextBanner({ header, mainText }: TextBannerProps) {
  return (
    <div className={styles.textBannerContainer}>
      <h3 className={styles.bannerHeader}>{header}</h3>
      <p className={styles.bannerText}>{mainText}</p>
    </div>
  );
}

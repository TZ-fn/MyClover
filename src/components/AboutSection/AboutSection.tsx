import useTranslation from "~/hooks/useTranslation";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const [translation] = useTranslation();

  return (
    <div className={styles.aboutSectionContainer}>
      <div className={styles.mainInfoContainer}></div>
      <div className={styles.iconsContainer}></div>
      <button className={styles.actionButton}>{}</button>
    </div>
  );
}

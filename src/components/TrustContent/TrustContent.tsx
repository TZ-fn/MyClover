import useTranslation from "hooks/useTranslation";
import styles from "./TrustContent.module.scss";

export default function TrustContent() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.trust.mainHeader}</h3>
      <p className={styles.subHeader}>{translation.pages.postsData.trust.subHeader}</p>
      <p className={styles.mainText}>{translation.pages.postsData.trust.mainText}</p>
    </main>
  );
}

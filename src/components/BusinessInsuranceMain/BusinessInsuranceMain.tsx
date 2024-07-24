import useTranslation from "hooks/useTranslation";
import styles from "./BusinessInsuranceMain.module.scss";

export default function BusinessInsuranceMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.businessInsurance.mainHeader}</h3>
      <h4 className={styles.subHeader}>{translation.pages.postsData.businessInsurance.subHeader}</h4>
      <p className={styles.mainText}>{translation.pages.postsData.businessInsurance.mainText}</p>
    </main>
  );
}

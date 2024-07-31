import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import styles from "./InsuranceCostMain.module.scss";

export default function InsuranceCostMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <TextItem header="" text={translation.pages.postsData.insuranceCosts.mainText} />
    </main>
  );
}

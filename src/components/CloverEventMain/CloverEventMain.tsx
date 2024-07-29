import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import styles from "./CloverEventMain.module.scss";

export default function CloverEventMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.cloverEvent.mainHeader}</h3>
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text1} />
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text2} />
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text3} />
    </main>
  );
}

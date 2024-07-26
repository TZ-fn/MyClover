import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import styles from "./LotteryMain.module.scss";

export default function LotteryMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.lottery.subHeader}</h3>
      {translation.pages.postsData.lottery.items.map((item, i) => {
        return <TextItem key={i} header={item.header} text={item.text} />;
      })}
    </main>
  );
}

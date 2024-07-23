import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import TextList from "components/shared/TextList/TextList";
import styles from "./LifeCoverMain.module.scss";

export default function LifeCoverMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.lifeCover.header}</h3>
      {translation.pages.postsData.holiday.items.map((item, i) => {
        if (item.header || item.text) {
          return <TextItem key={i} header={item.header} text={item.text} />;
        }
        if (item.listDescription) {
          return <TextList key={i} listDescription={item.listDescription} listElements={item.listElements} />;
        }
      })}
    </main>
  );
}

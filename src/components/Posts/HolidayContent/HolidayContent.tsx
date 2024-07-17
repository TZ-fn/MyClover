import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import TextList from "components/shared/TextList/TextList";
import styles from "./HolidayContent.module.scss";

export default function HolidayContent() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.holiday.mainHeader}</h3>
      {translation.pages.postsData.holiday.items.map((item) => {
        if (item.header || item.text) {
          return <TextItem key={item.header} header={item.header} text={item.text} />;
        }
        if (item.listDescription) {
          return (
            <TextList
              key={item.listDescription}
              listDescription={item.listDescription}
              listElements={item.listElements}
            />
          );
        }
      })}
    </main>
  );
}

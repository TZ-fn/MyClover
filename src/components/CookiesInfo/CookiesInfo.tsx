import useTranslation from "hooks/useTranslation";
import styles from "./CookiesInfo.module.scss";
import TextItem from "components/shared/TextItem/TextItem";
import TextList from "components/shared/TextList/TextList";

export default function CookiesInfo() {
  const [translation] = useTranslation();
  const cookiesInfoTranslation = translation.pages.cookies;

  return (
    <main className={styles.cookiesInfoContainer}>
      <h3 className={styles.mainHeader}>{cookiesInfoTranslation.mainHeader}</h3>
      <h4 className={styles.subHeader}>{cookiesInfoTranslation.subHeader}</h4>
      {cookiesInfoTranslation.items.map((item) => {
        if (item.header) {
          return <TextItem key={item.header} header={item.header} text={item.text} />;
        }
        if (item.listDescription || item.listElements) {
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

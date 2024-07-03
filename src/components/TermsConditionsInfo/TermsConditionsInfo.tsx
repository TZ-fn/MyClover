import useTranslation from "hooks/useTranslation";
import styles from "./TermsConditionsInfo.module.scss";
import TextItem from "components/shared/TextItem/TextItem";

export default function TermsConditionsInfo() {
  const [translation] = useTranslation();
  const termsConditionsInfoTranslation = translation.pages.termsConditions;

  return (
    <main className={styles.termsConditionsContainer}>
      <h3 className={styles.mainHeader}>{termsConditionsInfoTranslation.mainHeader}</h3>
      <h4 className={styles.subHeader}>{termsConditionsInfoTranslation.subHeader}</h4>
      {termsConditionsInfoTranslation.items.map((item) => {
        return <TextItem key={item.header} header={item.header} text={item.text} />;
      })}
    </main>
  );
}

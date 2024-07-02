import useTranslation from "hooks/useTranslation";
import styles from "./PrivacyPolicy.module.scss";
import TextItem from "components/shared/TextItem/TextItem";
import TextList from "components/shared/TextList/TextList";

export default function PrivacyPolicy() {
  const [translation] = useTranslation();
  const privacyPolicyTranslation = translation.pages.privacyPolicy;

  return (
    <main className={styles.privacyPolicyContainer}>
      <h3 className={styles.mainHeader}>{privacyPolicyTranslation.mainHeader}</h3>
      <h4 className={styles.subHeader}>{privacyPolicyTranslation.subHeader}</h4>
      {privacyPolicyTranslation.items.map((item) => {
        if (item.header) {
          return <TextItem key={item.header} header={item.header} text={item.text} />;
        }
        if (item.listDescription) {
          return (
            <TextList
              key={item.listDescription}
              listDescription={item.listDescription}
              listElements={item.listElements}
              listType="checkmark"
            />
          );
        }
      })}
    </main>
  );
}

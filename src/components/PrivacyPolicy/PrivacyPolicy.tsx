import useTranslation from "hooks/useTranslation";
import styles from "./PrivacyPolicy.module.scss";
import PrivacyPolicyItem from "./PrivacyPolicyItem/PrivacyPolicyItem";
import PrivacyPolicyList from "./PrivacyPolicyList/PrivacyPolicyList";

export default function PrivacyPolicy() {
  const [translation] = useTranslation();
  const privacyPolicyTranslation = translation.pages.privacyPolicy;

  return (
    <main className={styles.privacyPolicyContainer}>
      <h3 className={styles.mainHeader}>{privacyPolicyTranslation.mainHeader}</h3>
      <h4 className={styles.subHeader}>{privacyPolicyTranslation.subHeader}</h4>
      {privacyPolicyTranslation.items.map((item) => {
        if (item.header) {
          return <PrivacyPolicyItem header={item.header} text={item.text} />;
        }
        if (item.listDescription) {
          return <PrivacyPolicyList listDescription={item.listDescription} listElements={item.listElements} />;
        }
      })}
    </main>
  );
}

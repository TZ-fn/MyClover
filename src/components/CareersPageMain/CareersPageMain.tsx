import useTranslation from "hooks/useTranslation";
import styles from "./CareersPageMain.module.scss";
import ContactDataBox from "components/ContactDataBox/ContactDataBox";

export default function CareersPageMain() {
  const [translation] = useTranslation();
  const careersPageTranslation = translation.pages.careers;

  return (
    <main className={styles.mainContainer}>
      <section className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.mainHeader}>{careersPageTranslation.mainHeader}</h3>
          <p>{careersPageTranslation.text}</p>
        </div>
        <ContactDataBox phoneNumber="785 82 82 317" />
      </section>
    </main>
  );
}

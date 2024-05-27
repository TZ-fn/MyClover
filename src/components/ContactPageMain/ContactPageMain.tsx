import useTranslation from "hooks/useTranslation";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./ContactPageMain.module.scss";

export default function ContactPageMain() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;

  return (
    <main className={styles.mainContainer}>
      <ContactForm />
      <div className={styles.contactDataContainer}></div>
    </main>
  );
}

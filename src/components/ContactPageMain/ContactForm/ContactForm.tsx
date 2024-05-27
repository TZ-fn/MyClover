import useTranslation from "hooks/useTranslation";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;

  return (
    <form className={styles.mainContainer}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>{contactPageTranslation.contactForm.send}</button>
    </form>
  );
}

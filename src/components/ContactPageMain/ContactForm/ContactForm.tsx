import useTranslation from "hooks/useTranslation";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;

  return (
    <form className={styles.mainContainer}>
      <h3>{contactPageTranslation.contactForm.header}</h3>
      <p>{contactPageTranslation.contactForm.text1}</p>
      <input type="text" placeholder={contactPageTranslation.contactForm.form1Placeholder} />
      <input type="text" placeholder={contactPageTranslation.contactForm.form2Placeholder} />
      <select>
        <option value={contactPageTranslation.contactForm.form3Options.insurance}>
          {contactPageTranslation.contactForm.form3Options.insurance}
        </option>
        <option value={contactPageTranslation.contactForm.form3Options.mortgage}>
          {contactPageTranslation.contactForm.form3Options.mortgage}
        </option>
      </select>
      <input type="text" placeholder={contactPageTranslation.contactForm.form4Placeholder} />
      <input type="checkbox" />
      <p>{contactPageTranslation.contactForm.formDisclaimer1}</p>
      <span>{contactPageTranslation.contactForm.formDisclaimer2}</span>
      <p>{contactPageTranslation.contactForm.formDisclaimer3}</p>
      <p>{contactPageTranslation.contactForm.formDisclaimer4}</p>
      <button>{contactPageTranslation.contactForm.send}</button>
    </form>
  );
}

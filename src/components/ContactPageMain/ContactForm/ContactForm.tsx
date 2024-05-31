import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;

  return (
    <form className={styles.mainContainer}>
      <h3 className={styles.formHeader}>{contactPageTranslation.contactForm.header}</h3>
      <p className={styles.formText}>{contactPageTranslation.contactForm.text1}</p>
      <input
        type="text"
        className={styles.emailInput}
        placeholder={contactPageTranslation.contactForm.form1Placeholder}
      />
      <input
        type="text"
        className={styles.passwordInput}
        placeholder={contactPageTranslation.contactForm.form2Placeholder}
      />
      <select>
        <option value={contactPageTranslation.contactForm.form3Options.insurance}>
          {contactPageTranslation.contactForm.form3Options.insurance}
        </option>
        <option value={contactPageTranslation.contactForm.form3Options.mortgage}>
          {contactPageTranslation.contactForm.form3Options.mortgage}
        </option>
      </select>
      <textarea className={styles.textArea} placeholder={contactPageTranslation.contactForm.form4Placeholder} />

      <p className={styles.formDisclaimer}>
        <input type="checkbox" className={styles.disclaimerCheckbox} />
        {contactPageTranslation.contactForm.formDisclaimer1}
        <Link to="/privacy-policy">
          <span className={styles.formLink}>{contactPageTranslation.contactForm.formDisclaimer2}</span>
        </Link>
      </p>
      <p className={styles.formDisclaimer}>{contactPageTranslation.contactForm.formDisclaimer3}</p>
      <p className={styles.formDisclaimerBold}>{contactPageTranslation.contactForm.formDisclaimer4}</p>
      <button className={styles.sendButton}>{contactPageTranslation.contactForm.send}</button>
    </form>
  );
}

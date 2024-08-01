import { useId } from "react";
import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;
  const checkboxID = useId();

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
        type="email"
        className={styles.passwordInput}
        placeholder={contactPageTranslation.contactForm.form2Placeholder}
      />
      <textarea className={styles.textArea} placeholder={contactPageTranslation.contactForm.form4Placeholder} />
      <p className={styles.formDisclaimer}>
        <input id={checkboxID} type="checkbox" className={styles.disclaimerCheckbox} />
        <label htmlFor={checkboxID}>
          {contactPageTranslation.contactForm.formDisclaimer1}
          <Link to="/privacy-policy">
            <span className={styles.formLink}>{contactPageTranslation.contactForm.formDisclaimer2}</span>
          </Link>
          <span className={styles.formDisclaimer}>{contactPageTranslation.contactForm.formDisclaimer3}</span>
          <span className={styles.formDisclaimerBold}>{contactPageTranslation.contactForm.formDisclaimer4}</span>
        </label>
      </p>
      <button className={styles.sendButton}>{contactPageTranslation.contactForm.send}</button>
    </form>
  );
}

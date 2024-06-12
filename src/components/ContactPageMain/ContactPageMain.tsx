import useTranslation from "hooks/useTranslation";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./ContactPageMain.module.scss";
import { Link } from "react-router-dom";

export default function ContactPageMain() {
  const [translation] = useTranslation();
  const contactPageTranslation = translation.pages.contact;

  return (
    <main className={styles.mainContainer}>
      <ContactForm />
      <div className={styles.contactDataContainer}>
        <h3 className={styles.contactDataHeader}>{contactPageTranslation.contactData.header}</h3>
        <div className={styles.contactItemContainer}>
          <div className={styles.phoneIconContainer}>
            <div className={styles.iconInnerContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.384 17.752a2.108 2.108 0 0 1-.522 3.359 7.543 7.543 0 0 1-5.476.642C10.5 20.523 3.477 13.5 2.247 8.614a7.543 7.543 0 0 1 .642-5.476 2.108 2.108 0 0 1 3.359-.522L8.333 4.7a2.094 2.094 0 0 1 .445 2.328A3.877 3.877 0 0 1 8 8.2c-2.384 2.384 5.417 10.185 7.8 7.8a3.877 3.877 0 0 1 1.173-.781 2.092 2.092 0 0 1 2.328.445zM10.571 2.771a1 1 0 1 0 .858 1.806 6 6 0 0 1 7.994 7.994 1 1 0 0 0 1.807.858A8 8 0 0 0 10.571 2.771zm4.844 10.057a1 1 0 0 0 1.414 0 4 4 0 1 0-5.657-5.656 1 1 0 0 0 1.414 1.414 2.048 2.048 0 0 1 2.829 0 2 2 0 0 1 0 2.828 1 1 0 0 0 0 1.414z" />
              </svg>
            </div>
          </div>
          <div className={styles.phoneContainer}>
            <p className={styles.dataLabel}>Renata</p>
            <Link to="tel://447858282317">+44 7858282317</Link>
          </div>
        </div>
        <div className={styles.contactItemContainer}>
          <div className={styles.emailIconContainer}>
            <div className={styles.iconInnerContainer}>
              <svg data-name="1-Mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
                <path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" />
              </svg>
            </div>
          </div>
          <div className={styles.emailContainer}>
            <p className={styles.dataLabel}>{contactPageTranslation.contactData.email}</p>
            <Link to="mailto:office@myclover.co.uk">office@myclover.co.uk</Link>
          </div>
        </div>
        <div className={styles.contactItemContainer}>
          <div className={styles.phoneIconContainer}>
            <div className={styles.iconInnerContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.384 17.752a2.108 2.108 0 0 1-.522 3.359 7.543 7.543 0 0 1-5.476.642C10.5 20.523 3.477 13.5 2.247 8.614a7.543 7.543 0 0 1 .642-5.476 2.108 2.108 0 0 1 3.359-.522L8.333 4.7a2.094 2.094 0 0 1 .445 2.328A3.877 3.877 0 0 1 8 8.2c-2.384 2.384 5.417 10.185 7.8 7.8a3.877 3.877 0 0 1 1.173-.781 2.092 2.092 0 0 1 2.328.445zM10.571 2.771a1 1 0 1 0 .858 1.806 6 6 0 0 1 7.994 7.994 1 1 0 0 0 1.807.858A8 8 0 0 0 10.571 2.771zm4.844 10.057a1 1 0 0 0 1.414 0 4 4 0 1 0-5.657-5.656 1 1 0 0 0 1.414 1.414 2.048 2.048 0 0 1 2.829 0 2 2 0 0 1 0 2.828 1 1 0 0 0 0 1.414z" />
              </svg>
            </div>
          </div>
          <div className={styles.phoneContainer}>
            <p className={styles.dataLabel}>Martyna</p>
            <Link to="tel://447522345476">+44 7522345476</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

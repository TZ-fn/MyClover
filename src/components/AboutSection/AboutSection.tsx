import useTranslation from "~/hooks/useTranslation";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const [translation] = useTranslation();

  const aboutSectionTranslation = translation.pages.home.aboutSection;

  return (
    <div className={styles.aboutSectionContainer}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.mainInfo}>
          <h3 className={styles.header}>{aboutSectionTranslation.header}</h3>
          <h4 className={styles.subHeader}>{aboutSectionTranslation.subHeader}</h4>
          <p className={styles.mainText}>{aboutSectionTranslation.mainText}</p>
        </div>

        <div className={styles.contactData}>
          <div className={styles.contactDataContainer}>
            <div className={styles.phoneIconContainer}></div>
            <div className={styles.phoneContainer}>
              <p className={styles.dataLabel}>{aboutSectionTranslation.learnMore}</p>
              <a>+44 7858282317</a>
            </div>
          </div>
          <div className={styles.contactDataContainer}>
            <div className={styles.emailIconContainer}></div>
            <div className={styles.emailContainer}>
              <p className={styles.dataLabel}>{aboutSectionTranslation.emailAddress}</p>
              <a>office@myclover.co.uk</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.iconsContainer}>
        <div>
          <p>{aboutSectionTranslation.iconInsurances}</p>
        </div>
        <div>
          <p>{aboutSectionTranslation.iconMortgages}</p>
        </div>
        <div>
          <p>{aboutSectionTranslation.iconCareer}</p>
        </div>
      </div>
      <button className={styles.actionButton}>{aboutSectionTranslation.seeMoreBtn}</button>
    </div>
  );
}

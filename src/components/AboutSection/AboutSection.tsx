import useTranslation from "~/hooks/useTranslation";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const [translation] = useTranslation();

  const aboutSectionTranslation = translation.pages.home.aboutSection;

  return (
    <div className={styles.aboutSectionContainer}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.mainInfo}>
          <h3>{aboutSectionTranslation.header}</h3>
          <h4>{aboutSectionTranslation.subHeader}</h4>
          <p>{aboutSectionTranslation.mainText}</p>
        </div>
        <div className={styles.contactData}>
          <div>
            <p>{aboutSectionTranslation.learnMore}</p>
            <a>+44 7858282317</a>
          </div>
          <div>
            <p>{aboutSectionTranslation.emailAddress}</p>
            <a>office@myclover.co.uk</a>
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

import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import IconChecked from "assets/Icons/iconChecked.svg";
import IconGrowth from "assets/Icons/iconGrowth.svg";
import IconMortgage from "assets/Icons/iconMortgage.svg";
import styles from "./AboutSection.module.scss";
import ContactDataBox from "components/ContactDataBox/ContactDataBox";

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
        <ContactDataBox phoneNumber="785 828 2317" />
      </div>
      <div className={styles.iconsContainer}>
        <div>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={IconChecked} alt="" loading="lazy" />
            <img className={styles.iconHovered} src={IconChecked} alt="" loading="lazy" />
          </div>
          <p className={styles.iconLabel}>{aboutSectionTranslation.iconInsurances}</p>
        </div>
        <div>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={IconMortgage} alt="" loading="lazy" />
            <img className={styles.iconHovered} src={IconMortgage} alt="" loading="lazy" />
          </div>
          <p className={styles.iconLabel}>{aboutSectionTranslation.iconMortgages}</p>
        </div>
        <div>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={IconGrowth} alt="" loading="lazy" />
            <img className={styles.iconHovered} src={IconGrowth} alt="" loading="lazy" />
          </div>
          <p className={styles.iconLabel}>{aboutSectionTranslation.iconCareer}</p>
        </div>
      </div>
      <Link className={styles.seeMore} to="/offer">
        {aboutSectionTranslation.seeMore}
      </Link>
    </div>
  );
}

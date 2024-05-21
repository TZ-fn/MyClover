import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import cloverSeparator from "../../assets/clover-separator.webp";
import styles from "./CooperationBanner.module.scss";

export default function CooperationBanner() {
  const [translation] = useTranslation();
  const cooperationBannerTranslation = translation.pages.aboutUs.cooperation;

  return (
    <>
      <div className={styles.cooperationBannerContainer}>
        <h3 className={styles.cooperationBannerHeader}>{cooperationBannerTranslation.header}</h3>
        <img src={cloverSeparator} className={styles.bannerSeparator} alt="" />
        <p className={styles.cooperationSubHeader}>{cooperationBannerTranslation.subHeader}</p>
        <Link to="/contact">
          <p className={styles.contact}>{cooperationBannerTranslation.contact}</p>
        </Link>
      </div>
    </>
  );
}

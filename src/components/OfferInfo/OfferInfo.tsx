import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import offerHero from "assets/offerHero.webp";
import styles from "./OfferInfo.module.scss";

export default function OfferInfo() {
  const [translation] = useTranslation();
  const offerTranslation = translation.pages.offer;

  return (
    <main className={styles.mainContainer}>
      <section className={styles.innerContainer}>
        <h3 className={styles.mainHeader}>{offerTranslation.mainInfo.mainHeader}</h3>
        <h4 className={styles.subHeader1}>{offerTranslation.mainInfo.subHeader1}</h4>
        <p className={styles.text1}>{offerTranslation.mainInfo.text1}</p>
        <h4 className={styles.subHeader2}>{offerTranslation.mainInfo.subHeader2}</h4>
        <p className={styles.text2}>{offerTranslation.mainInfo.text2}</p>
        <ul className={styles.infoList}>
          <li>{offerTranslation.mainInfo.listItem1}</li>
          <li>{offerTranslation.mainInfo.listItem2}</li>
          <li>{offerTranslation.mainInfo.listItem3}</li>
        </ul>
        <Link to={"/contact"}>
          <p className={styles.contact}>{offerTranslation.mainInfo.contact}</p>
        </Link>
      </section>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} src={offerHero} alt="" />
      </div>
    </main>
  );
}

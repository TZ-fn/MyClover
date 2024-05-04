import useTranslation from "hooks/useTranslation";
import styles from "./OffersList.module.scss";
import Offer from "./Offer/Offer";

export default function OffersList() {
  const [translation] = useTranslation();

  const offers = translation.pages.aboutUs.sectionTwo;

  return (
    <div className={styles.offersContainer}>
      <h3>{translation.pages.aboutUs.sectionTwo.header}</h3>
      <ul className={styles.offersList}>
        <Offer title={offers.offer1} />
        <Offer title={offers.offer2} />
        <Offer title={offers.offer3} />
        <Offer title={offers.offer4} />
        <Offer title={offers.offer5} />
        <Offer title={offers.offer6} />
      </ul>
    </div>
  );
}

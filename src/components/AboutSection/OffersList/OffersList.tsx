import Offer from "./Offer/Offer";
import useTranslation from "hooks/useTranslation";
import offer1 from "../../../assets/offers/offer1.webp";
import offer2 from "../../../assets/offers/offer2.webp";
import offer3 from "../../../assets/offers/offer3.webp";
import offer4 from "../../../assets/offers/offer4.webp";
import offer5 from "../../../assets/offers/offer5.webp";
import offer6 from "../../../assets/offers/offer6.webp";
import styles from "./OffersList.module.scss";

export default function OffersList() {
  const [translation] = useTranslation();

  const offers = translation.pages.aboutUs.sectionTwo;

  return (
    <section className={styles.offersContainer}>
      <h3 className={styles.offersListHeader}>{translation.pages.aboutUs.sectionTwo.header}</h3>
      <ul className={styles.offersList}>
        <Offer img={offer1} title={offers.offer1} />
        <Offer img={offer2} title={offers.offer2} />
        <Offer img={offer3} title={offers.offer3} />
        <Offer img={offer4} title={offers.offer4} />
        <Offer img={offer5} title={offers.offer5} />
        <Offer img={offer6} title={offers.offer6} />
      </ul>
    </section>
  );
}

import cloverSeparator from "../../assets/clover-separator.png";
import styles from "./CloverTextBanner.module.scss";

export default function CloverTextBanner() {
  return (
    <div className={styles.textBannerContainer}>
      <div className={styles.textBannerInnerContainer}>
        <h3 className={styles.bannerHeader}>Clover - Family Cover</h3>
        <img src={cloverSeparator} className={styles.bannerSeparator} alt="" />
        <p className={styles.bannerText}>
          Clover to coś więcej niż firma ubezpieczeniowa. Uwielbiamy kontakt z ludźmi, a nasza firma pragnie dostarczać
          usługę ponadczasową. Oferujemy swój czas i doświadczenie, nie tylko w zakresie zawierania ubezpieczeń.
          Pomożemy Ci wyszukać dogodną ofertę kredytową na dom, jak też zabezpieczymy Twój wymarzony świat. Gorąco
          zachęcamy do zapoznania się z naszą szczegółową ofertą.
          <span className={styles.bannerTextSpecial}>Zapraszamy również do współpracy.</span>
        </p>
      </div>
    </div>
  );
}

import useTranslation from "hooks/useTranslation";
import styles from "./MortgagesPageMain.module.scss";

export default function MortgagesPageMain() {
  const [translation] = useTranslation();
  const mortgagesPageTranslation = translation.pages.mortgages;

  return (
    <main className={styles.mainContainer}>
      <h3>{mortgagesPageTranslation.mainHeader}</h3>
      <p>{mortgagesPageTranslation.text1}</p>
      <p>{mortgagesPageTranslation.text2}</p>
      <p>{mortgagesPageTranslation.text3}</p>
      <div>
        <div>
          <p>{mortgagesPageTranslation.contactPhone}</p>
          <a href="tel:+44 7522345476">+44 7522345476</a>
        </div>
        <div>
          <p>{mortgagesPageTranslation.contactEmail}</p>
          <a href="mailto:office@myclover.co.uk">office@myclover.co.uk</a>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h4>{mortgagesPageTranslation.benefitsList[0]?.header}</h4>
            <p>{mortgagesPageTranslation.benefitsList[0]?.text}</p>
          </li>
          <li>
            <h4>{mortgagesPageTranslation.benefitsList[1]?.header}</h4>
            <p>{mortgagesPageTranslation.benefitsList[1]?.text}</p>
          </li>
          <li>
            <h4>{mortgagesPageTranslation.benefitsList[2]?.header}</h4>
            <p>{mortgagesPageTranslation.benefitsList[2]?.text}</p>
          </li>
        </ul>
      </div>
    </main>
  );
}

import useTranslation from "hooks/useTranslation";
import styles from "./MortgagesPageMain.module.scss";
import ContactDataBox from "components/ContactDataBox/ContactDataBox";

export default function MortgagesPageMain() {
  const [translation] = useTranslation();
  const mortgagesPageTranslation = translation.pages.mortgages;

  return (
    <main className={styles.mainContainer}>
      <section className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.mainHeader}>{mortgagesPageTranslation.mainHeader}</h3>
          <p>{mortgagesPageTranslation.text1}</p>
          <p>{mortgagesPageTranslation.text2}</p>
          <p>{mortgagesPageTranslation.text3}</p>
        </div>
        <ContactDataBox phoneNumber="752 234 5476" />
      </section>
      <section className={styles.benefitsSection}>
        <img className={styles.cloversImage} src="src/assets/clover.webp" alt="" />
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 0 130 140">
                <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                  <path d="M100.9 38.067V110.2a22.681 22.681 0 0 1-22.679 22.683H24.682A22.682 22.682 0 0 1 2 110.2V38.067a22.681 22.681 0 0 1 22.68-22.683h5.083v5.474a7 7 0 0 0 6.989 7.009h30.913a7 7 0 0 0 7.009-6.989v-5.494h3.546a22.68 22.68 0 0 1 22.68 22.68z" />
                  <path d="M91.073 38.067V110.2a12.862 12.862 0 0 1-12.853 12.85H24.682a12.867 12.867 0 0 1-12.853-12.85V38.067a12.867 12.867 0 0 1 12.853-12.854h6.593a6.992 6.992 0 0 0 5.489 2.654h30.9a7.006 7.006 0 0 0 5.5-2.654h5.056a12.862 12.862 0 0 1 12.853 12.854z" />
                  <path d="M74.674 14.749v6.109a7 7 0 0 1-6.989 7.009H36.764a7 7 0 0 1-7-7v-6.118a7 7 0 0 1 7-7h8.2a7.458 7.458 0 0 1 14.517 0h8.188a7.007 7.007 0 0 1 7.005 7zM67.812 64.35h-9.5v-9.5H44.59v9.5h-9.499v13.721h9.499v9.5h13.722v-9.5h9.5V64.35zM29.992 106.048H72.91" />
                </g>
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{mortgagesPageTranslation.benefitsList[0]?.header}</h4>
            <p className={styles.benefitItemText}>{mortgagesPageTranslation.benefitsList[0]?.text}</p>
          </li>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -25 150 150">
                <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                  <path d="M139.419 32.456a30.468 30.468 0 0 0-60.936 0 30.468 30.468 0 1 0-60.344 5.983c.783 24.851 60.344 78.114 60.344 78.114s59.562-53.263 60.345-78.114a30.736 30.736 0 0 0 .591-5.983zM111.032 52.582h40.375" />
                  <path d="m109.933 52.582-6.998 8.176-7.592-23.989-11.5 33.064L73.42 45.395l-6.109 16.531-14.735-22.641-4.413 14.016H2" />
                </g>
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{mortgagesPageTranslation.benefitsList[1]?.header}</h4>
            <p className={styles.benefitItemText}>{mortgagesPageTranslation.benefitsList[1]?.text}</p>
          </li>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg strokeWidth="0.3" xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 70 70">
                <path d="M27 6h10a1 1 0 0 0 0-2H27a1 1 0 0 0 0 2z" />
                <path d="M51 4h-8.382L40.894.553A1 1 0 0 0 40 0H24a1 1 0 0 0-.894.553L21.381 4H13a5.006 5.006 0 0 0-5 5v50a5.006 5.006 0 0 0 5 5h38a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5zM22 6a1 1 0 0 0 .894-.553L24.619 2h14.764l1.724 3.447A1 1 0 0 0 42 6h4v2H18V6zm-5 4h30a1 1 0 0 0 1-1V6h2v52H14V6h2v3a1 1 0 0 0 1 1zm37 49a3.003 3.003 0 0 1-3 3H13a3.003 3.003 0 0 1-3-3V9a2.995 2.995 0 0 1 2-2.816V59a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1V6.184A2.995 2.995 0 0 1 54 9z" />
                <path d="M21 31h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-2v-2h2zM21 39h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-2v-2h2zM21 47h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-2v-2h2zM21 23h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-2v-2h2zM16 20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm2-3h2v2h-2zM25 17h22a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 21h11a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 25h22a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 29h11a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 33h22a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 37h11a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 41h22a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 45h11a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 49h22a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2zM25 53h11a1 1 0 0 0 0-2H25a1 1 0 0 0 0 2z" />
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{mortgagesPageTranslation.benefitsList[2]?.header}</h4>
            <p className={styles.benefitItemText}>{mortgagesPageTranslation.benefitsList[2]?.text}</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

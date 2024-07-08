import useTranslation from "hooks/useTranslation";
import ContactDataBox from "components/ContactDataBox/ContactDataBox";
import clover from "assets/clover.webp";
import styles from "./IncomeProtectionMain.module.scss";

export default function IncomeProtectionMain() {
  const [translation] = useTranslation();
  const incomeProtectionTranslation = translation.pages.incomeProtection;

  return (
    <main className={styles.mainContainer}>
      <section className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.mainHeader}>{incomeProtectionTranslation.mainHeader}</h3>
          <p>{incomeProtectionTranslation.text}</p>
        </div>
        <ContactDataBox phoneNumber="785 82 82 317" />
      </section>
      <section className={styles.benefitsSection}>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg strokeWidth="4" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 140 140">
                <path
                  fill="#282D33"
                  d="M46.872 93.337C21.483 93.337.821 72.406.812 46.68.806 34.275 5.577 22.579 14.246 13.746 22.958 4.881 34.542 0 46.864 0 59.195 0 70.76 4.857 79.477 13.677c8.71 8.817 13.507 20.531 13.507 32.984.002 12.406-4.766 24.096-13.425 32.915C70.83 88.45 59.235 93.337 46.91 93.337h-.001l-.038-2 .029-2c11.253 0 21.836-4.462 29.806-12.564 7.919-8.065 12.279-18.759 12.277-30.111 0-11.395-4.387-22.11-12.353-30.173C68.672 8.435 58.118 4 46.913 4 35.624 4 25.053 8.457 17.1 16.549 9.17 24.628 4.807 35.329 4.812 46.678c.007 23.522 18.876 42.659 42.06 42.659v4z"
                />
                <path
                  fill="#282D33"
                  d="M46.875 82.332c-9.397 0-18.239-3.716-24.896-10.464-6.651-6.742-10.311-15.69-10.307-25.197-.002-9.484 3.646-18.42 10.274-25.16 6.658-6.78 15.516-10.518 24.942-10.524 9.422 0 18.269 3.718 24.923 10.47 6.65 6.73 10.319 15.679 10.329 25.196.002 9.488-3.646 18.42-10.271 25.154-6.669 6.786-15.535 10.524-24.966 10.525h-.028zm.026-67.345c-8.355.005-16.2 3.317-22.101 9.328-5.888 5.988-9.129 13.927-9.127 22.357-.003 8.449 3.248 16.399 9.155 22.387 5.899 5.98 13.729 9.273 22.048 9.273v2l.026-2c8.351-.001 16.205-3.314 22.116-9.329 5.886-5.981 9.126-13.918 9.124-22.348-.008-8.458-3.268-16.409-9.177-22.389-5.898-5.984-13.733-9.279-22.064-9.279z"
                />
                <path
                  fill="#282D33"
                  d="m27.985 46.667-4-.001c.001-6.168 2.373-11.979 6.678-16.36 4.338-4.414 10.103-6.845 16.232-6.845v4c-5.048 0-9.799 2.006-13.378 5.649-3.567 3.629-5.531 8.444-5.532 13.557zM114.221 128c-1.706 0-3.401-.348-5.037-1.035l-.368-.154L77.84 95.417l17.168-17.394 31.011 31.424.15.366c1.701 4.161 1.258 8.662-1.218 12.349-2.454 3.655-6.466 5.838-10.73 5.838zm-3.133-4.582c3.904 1.465 8.219-.024 10.543-3.485 1.65-2.459 1.997-5.446.972-8.252L95.008 83.718 83.459 95.417l27.629 28.001z"
                />
                <path
                  fill="#282D33"
                  d="m100.096 89.383 2.848 2.809-11.079 11.233-2.848-2.809zM80.385 77.757l7.822 7.93-2.848 2.809-7.822-7.93z"
                />
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{incomeProtectionTranslation.benefitsList[0]?.header}</h4>
            <p className={styles.benefitItemText}>{incomeProtectionTranslation.benefitsList[0]?.text}</p>
          </li>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg strokeWidth={0.1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M8.38 11.65a1 1 0 0 0 .76.35 1 1 0 0 0 .77-.42l2.85-4a1 1 0 0 0-1.62-1.16l-2.12 3L8.76 9a1 1 0 1 0-1.52 1.3zM8.38 17.65a1 1 0 0 0 .76.35 1 1 0 0 0 .77-.42l2.85-4a1 1 0 0 0-1.62-1.16l-2.12 3-.26-.42a1 1 0 1 0-1.52 1.3zM10.19 19.62a3.19 3.19 0 1 0 3.19 3.19 3.19 3.19 0 0 0-3.19-3.19zm0 4.38a1.19 1.19 0 1 1 0-2.38 1.19 1.19 0 1 1 0 2.38zM24 8.08h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zM24 15h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zM24 21.92h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
                <path d="M26.15 2H5.85A3.86 3.86 0 0 0 2 5.85v20.3A3.86 3.86 0 0 0 5.85 30h20.3A3.86 3.86 0 0 0 30 26.15V5.85A3.86 3.86 0 0 0 26.15 2zM28 26.15A1.85 1.85 0 0 1 26.15 28H5.85A1.85 1.85 0 0 1 4 26.15V5.85A1.85 1.85 0 0 1 5.85 4h20.3A1.85 1.85 0 0 1 28 5.85z" />
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{incomeProtectionTranslation.benefitsList[1]?.header}</h4>
            <p className={styles.benefitItemText}>{incomeProtectionTranslation.benefitsList[1]?.text}</p>
          </li>
          <li className={styles.benefitItem}>
            <div className={styles.benefitIconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g strokeWidth="1.5" fill="#1a171b">
                  <path d="m44.883 24 1.9-4.918a.727.727 0 0 0-.181-.793l-3.846-3.6-.42-5.256a.727.727 0 0 0-.508-.635L36.8 7.217l-2.658-4.551a.737.737 0 0 0-.733-.354l-5.216.76-4.37-2.947a.722.722 0 0 0-.813 0l-4.37 2.947-5.216-.76a.734.734 0 0 0-.733.354l-2.659 4.551L5 8.8a.729.729 0 0 0-.508.637l-.419 5.254L.23 18.292a.727.727 0 0 0-.181.793L1.949 24l-1.9 4.913a.725.725 0 0 0 .181.793l3.846 3.606.424 5.257a.726.726 0 0 0 .5.636l5.029 1.58 2.659 4.551a.742.742 0 0 0 .733.354l5.216-.76 4.37 2.947a.722.722 0 0 0 .812 0l4.37-2.947 5.216.76a.741.741 0 0 0 .733-.354l2.662-4.551 5.029-1.58a.729.729 0 0 0 .508-.636l.42-5.254 3.843-3.606a.725.725 0 0 0 .181-.793zm-3.324 8.443a.727.727 0 0 0-.229.473l-.4 5.047-4.83 1.518a.737.737 0 0 0-.41.328l-2.553 4.369-5.009-.729a.734.734 0 0 0-.511.117l-4.2 2.83-4.2-2.83a.713.713 0 0 0-.51-.117l-5.009.729-2.554-4.369a.737.737 0 0 0-.41-.328l-4.83-1.515-.4-5.047a.727.727 0 0 0-.229-.473l-3.691-3.461 1.824-4.721a.731.731 0 0 0 0-.525l-1.824-4.721 3.692-3.463a.723.723 0 0 0 .229-.473l.4-5.045 4.83-1.516a.729.729 0 0 0 .41-.328L13.7 3.822l5.009.73a.721.721 0 0 0 .511-.117l4.2-2.83 4.2 2.83a.714.714 0 0 0 .511.117l5.009-.73 2.553 4.371a.729.729 0 0 0 .41.328l4.83 1.516.4 5.045a.723.723 0 0 0 .229.473l3.692 3.463-1.825 4.721a.731.731 0 0 0 0 .525l1.825 4.721z" />
                  <path d="M37.963 23.274a.729.729 0 0 0-.728.729A13.811 13.811 0 1 1 31.4 12.72a.728.728 0 1 0 .841-1.188A15.274 15.274 0 1 0 38.689 24a.726.726 0 0 0-.726-.726z" />
                  <path d="M16.16 18.393a.727.727 0 0 0-1.241.514v7.254a.734.734 0 0 0 .213.516l7.542 7.541a.725.725 0 0 0 1.029 0L38.4 19.528a.734.734 0 0 0 .213-.517v-7.256a.726.726 0 0 0-1.241-.513L23.188 25.421zm20.993-4.882v5.2L23.187 32.674l-6.814-6.814v-5.2l6.3 6.3a.752.752 0 0 0 1.028 0z" />
                </g>
              </svg>
            </div>
            <h4 className={styles.benefitItemHeader}>{incomeProtectionTranslation.benefitsList[2]?.header}</h4>
            <p className={styles.benefitItemText}>{incomeProtectionTranslation.benefitsList[2]?.text}</p>
          </li>
        </ul>
        <img className={styles.cloversImage} src={clover} alt="" />
      </section>
    </main>
  );
}

import useTranslation from "hooks/useTranslation";
import cloverSeparator from "../../assets/clover-separator.webp";
import Question from "./Question/Question";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const [translation] = useTranslation();
  const FAQTranslation = translation.pages.aboutUs.questionsSection;

  return (
    <div className={styles.FAQContainer}>
      <h3 className={styles.header}>{FAQTranslation.header}</h3>
      <img src={cloverSeparator} className={styles.bannerSeparator} alt="" />
      <p className={styles.subHeader}>{FAQTranslation.subHeader}</p>
      <div className={styles.questions}>
        {FAQTranslation.questions.map((_question, i) => {
          return <Question isOpen={false} key={i} FAQitem={FAQTranslation.questions[i]!} />;
        })}
      </div>
    </div>
  );
}
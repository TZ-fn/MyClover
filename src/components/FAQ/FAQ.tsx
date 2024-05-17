import useTranslation from "hooks/useTranslation";
import cloverSeparator from "../../assets/clover-separator.webp";
import Question from "./Question/Question";
import styles from "./FAQ.module.scss";
import { Link } from "react-router-dom";
import NavigationItem from "components/Header/NavigationList/NavigationItem/NavigationItem";

export default function FAQ() {
  const [translation] = useTranslation();
  const FAQTranslation = translation.pages.aboutUs.questionsSection;

  return (
    <section className={styles.FAQContainer}>
      <h3 className={styles.header}>{FAQTranslation.header}</h3>
      <img src={cloverSeparator} className={styles.bannerSeparator} alt="" />
      <p className={styles.subHeader}>{FAQTranslation.subHeader}</p>
      <div className={styles.questions} role="tablist" aria-live="polite">
        {FAQTranslation.questions.map((_question, i) => {
          return <Question key={i} FAQitem={FAQTranslation.questions[i]!} />;
        })}
      </div>
      <div className={styles.moreQuestions}>
        <p>{FAQTranslation.moreQuestions}</p>
        <Link to="/contact">
          <p>{FAQTranslation.contact}</p>
        </Link>
      </div>
    </section>
  );
}

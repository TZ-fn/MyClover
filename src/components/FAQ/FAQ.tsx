import useTranslation from "hooks/useTranslation";
import Question from "./Question/Question";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const [translation] = useTranslation();
  const FAQTranslation = translation.pages.aboutUs.questionsSection;

  return (
    <div>
      <h3 className={styles.header}>{FAQTranslation.header}</h3>
      <p className={styles.subheader}>{FAQTranslation.subHeader}</p>
      <ul className={styles.listOfQuestions}>
        {FAQTranslation.questions.map((_question, i) => {
          return <Question key={i} FAQitem={FAQTranslation.questions[i]!} />;
        })}
      </ul>
    </div>
  );
}

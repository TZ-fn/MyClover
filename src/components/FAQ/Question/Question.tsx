import styles from "./Question.module.scss";

export default function Question({ FAQitem }: { FAQitem: { question: string; answer: string } }) {
  return (
    <div className={styles.questionContainer}>
      <p className={styles.question}>{FAQitem.question}</p>
      <p className={styles.answer}>{FAQitem.answer}</p>
    </div>
  );
}

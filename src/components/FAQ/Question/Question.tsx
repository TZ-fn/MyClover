import iconPlus from "assets/icons/iconPlus.svg";
import iconMinus from "assets/icons/iconMinus.svg";
import styles from "./Question.module.scss";

export default function Question({
  FAQitem,
  isOpen,
}: {
  FAQitem: { question: string; answer: string };
  isOpen: boolean;
}) {
  console.log(isOpen);
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionInnerContainer}>
        <img className={styles.questionIcon} src={isOpen ? iconMinus : iconPlus} alt="" />
        <p className={styles.question}>{FAQitem.question}</p>
      </div>
      <p className={styles.answer}>{FAQitem.answer}</p>
    </div>
  );
}

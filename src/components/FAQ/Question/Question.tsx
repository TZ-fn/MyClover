import iconPlus from "assets/icons/iconPlus.svg";
import iconMinus from "assets/icons/iconMinus.svg";
import styles from "./Question.module.scss";
import { useState } from "react";

export default function Question({ FAQitem }: { FAQitem: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      className={isOpen ? styles.questionContainerOpen : styles.questionContainer}
    >
      <div className={styles.questionInnerContainer}>
        <p className={styles.question}>{FAQitem.question}</p>
      </div>
      <p className={styles.answer}>{FAQitem.answer}</p>
    </div>
  );
}

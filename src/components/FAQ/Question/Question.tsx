import { useState } from "react";
import wasSpaceOrEnterPressed from "utils/wasSpaceOrEnterPressed";
import styles from "./Question.module.scss";

export default function Question({ FAQitem }: { FAQitem: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      onKeyDown={(e) => {
        if (wasSpaceOrEnterPressed(e)) {
          setIsOpen((isOpen) => !isOpen);
        }
      }}
      className={isOpen ? styles.questionContainerOpen : styles.questionContainer}
      role="tab"
      aria-expanded={isOpen ? "true" : "false"}
      tabIndex={0}
    >
      <div className={styles.questionInnerContainer}>
        <p className={styles.question}>{FAQitem.question}</p>
      </div>
      <p role="tabpanel" aria-hidden={isOpen ? "true" : "false"} className={styles.answer}>
        {FAQitem.answer}
      </p>
    </div>
  );
}

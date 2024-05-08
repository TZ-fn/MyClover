export default function Question({ FAQitem }: { FAQitem: { question: string; answer: string } }) {
  return (
    <li>
      <p>{FAQitem.question}</p>
      <p>{FAQitem.answer}</p>
    </li>
  );
}

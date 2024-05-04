import styles from "./Offer.module.scss";

export default function Offer({ title }: { title: string }) {
  return (
    <div className={styles.offerContainer}>
      <img src="" alt="" className={styles.offerIcon} />
      <p className={styles.offerTitle}>{title}</p>
    </div>
  );
}

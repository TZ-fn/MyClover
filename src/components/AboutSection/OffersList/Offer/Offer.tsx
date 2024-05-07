import styles from "./Offer.module.scss";

export default function Offer({ title, img }: { title: string; img: string }) {
  return (
    <div className={styles.offerContainer}>
      <img src={img} alt="" className={styles.offerIcon} />
      <p className={styles.offerTitle}>{title}</p>
    </div>
  );
}

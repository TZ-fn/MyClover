import styles from "./ImageDivider.module.scss";

export default function ImageDivider({ isUpwards }: { isUpwards: boolean }) {
  return (
    <div className={styles.imageDividerContainer}>
      <div className={`${styles.imageDivider} ${isUpwards ? styles.upwards : styles.downwards}`}></div>
    </div>
  );
}

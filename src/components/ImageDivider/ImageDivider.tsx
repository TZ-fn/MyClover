import styles from "./ImageDivider.module.scss";

export default function ImageDivider({ isUpwards }: { isUpwards: boolean }) {
  return (
    <div className={`${styles.imageDividerContainer} ${isUpwards ? styles.upwards : styles.downwards}`}>
      <div className={styles.imageDivider}></div>
    </div>
  );
}

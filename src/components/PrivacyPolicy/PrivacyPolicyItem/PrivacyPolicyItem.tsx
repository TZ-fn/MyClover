import styles from "PrivacyPolicyItem.module.scss";

interface PrivacyPolicyItemProps {
  header: string;
  text: string;
}

function PrivacyPolicyItem({ header, text }: PrivacyPolicyItemProps) {
  return (
    <div className={styles.itemContainer}>
      <h5 className={styles.itemHeader}>{header}</h5>
      <p className={styles.itemText}>{text}</p>
    </div>
  );
}

export default PrivacyPolicyItem;

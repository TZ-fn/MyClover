import styles from "./TextItem.module.scss";

interface TextItemProps {
  header: string;
  text: string;
}

function TextItem({ header, text }: TextItemProps) {
  return (
    <div className={styles.itemContainer}>
      <h5 className={styles.itemHeader}>{header}</h5>
      {text && <p className={styles.itemText}>{text}</p>}
    </div>
  );
}

export default TextItem;

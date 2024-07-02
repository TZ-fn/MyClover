import styles from "./TextList.module.scss";

interface TextListProps {
  listDescription: string;
  listElements: string[];
  listType?: "checkmark" | "default";
}

function TextList({ listDescription, listElements, listType = "default" }: TextListProps) {
  return (
    <>
      <p className={styles.listDescription}>{listDescription}</p>
      <ul className={`${styles.listContainer} ${listType === "checkmark" ? styles.checkMarkList : ""}`}>
        {listElements.map((element, i) => {
          return (
            <li key={i} className={styles.listItem}>
              {element}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TextList;

import styles from "./PrivacyPolicyList.module.scss";

interface PrivacyPolicyListProps {
  listDescription: string;
  listElements: string[];
}

function PrivacyPolicyList({ listDescription, listElements }: PrivacyPolicyListProps) {
  return (
    <>
      <p className={styles.listDescription}>{listDescription}</p>
      <ul className={styles.listContainer}>
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

export default PrivacyPolicyList;

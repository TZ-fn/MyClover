import useTranslation from "hooks/useTranslation";
import styles from "./HolidayContent.module.scss";

export default function HolidayContent() {
  const [translation] = useTranslation();

  return <main className={styles.mainContainer}>Holiday</main>;
}

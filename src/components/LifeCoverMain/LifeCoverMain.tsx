import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import TextList from "components/shared/TextList/TextList";
import styles from "./LifeCoverMain.module.scss";

export default function LifeCoverMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.lifeCover.header}</h3>
      {translation.pages.postsData.lifeCover.items.map((item, i) => {
        if (item.header || item.text) {
          return <TextItem key={i} header={item.header} text={item.text} />;
        }
        if (item.listDescription) {
          return <TextList key={i} listDescription={item.listDescription} listElements={item.listElements} />;
        }
      })}
      <h4 className={styles.midHeader}>{translation.pages.postsData.lifeCover.midHeader}</h4>
      {translation.pages.postsData.lifeCover.items2.map((item, i) => {
        return <TextItem key={i} header={item.header} text={item.text} />;
      })}
      <Link to="/contact">
        <p className={styles.contactLink}>{translation.pages.postsData.lifeCover.contactBtn}</p>
      </Link>
    </main>
  );
}

import useTranslation from "hooks/useTranslation";
import TextItem from "components/shared/TextItem/TextItem";
import gallery1 from "assets/postsImages/CloverEvent/gallery_1.webp";
import gallery2 from "assets/postsImages/CloverEvent/gallery_2.webp";
import gallery3 from "assets/postsImages/CloverEvent/gallery_3.webp";
import gallery4 from "assets/postsImages/CloverEvent/gallery_4.webp";
import main1 from "assets/postsImages/CloverEvent/main_1.webp";
import main2 from "assets/postsImages/CloverEvent/main_2.webp";
import styles from "./CloverEventMain.module.scss";

export default function CloverEventMain() {
  const [translation] = useTranslation();

  return (
    <main className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{translation.pages.postsData.cloverEvent.mainHeader}</h3>
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text1} />
      <ul className={styles.smallGallery}>
        <li className={styles.smallGalleryItem}>
          <img src={gallery1} alt="" />
        </li>
        <li className={styles.smallGalleryItem}>
          <img src={gallery2} alt="" />
        </li>
        <li className={styles.smallGalleryItem}>
          <img src={gallery3} alt="" />
        </li>
        <li className={styles.smallGalleryItem}>
          <img src={gallery4} alt="" />
        </li>
      </ul>
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text2} />
      <img className={styles.mainImage} src={main1} alt="" />
      <img className={styles.mainImage} src={main2} alt="" />
      <TextItem header="" text={translation.pages.postsData.cloverEvent.text3} />
    </main>
  );
}

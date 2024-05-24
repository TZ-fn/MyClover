import useTranslation from "hooks/useTranslation";
import PostsGallery from "components/PostsGallery/PostsGallery";
import offersPostsData from "assets/offersPostsData";
import styles from "./OffersPosts.module.scss";

export default function OffersPosts() {
  const [translation] = useTranslation();
  const offerTranslation = translation.pages.offer.offersList;

  return (
    <section className={styles.mainContainer}>
      <h3 className={styles.mainHeader}>{offerTranslation.mainHeader}</h3>
      <PostsGallery postsTranslation={offerTranslation.offers} postsData={offersPostsData} />
    </section>
  );
}

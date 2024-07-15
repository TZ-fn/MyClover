import useTranslation from "hooks/useTranslation";
import styles from "./BlogPostsGallery.module.scss";
import PostsGalleryItem from "components/PostsGallery/PostsGalleryItem/PostsGalleryItem";

export default function BlogPostsGallery() {
  const [translation] = useTranslation();

  return (
    <div className={styles.blogPostsGalleryContainer}>
      {translation.pages.postsMiniatures.map((post, index) => {
        return (
          <PostsGalleryItem
            key={index}
            miniature={post.miniature}
            descriptionHeader={post.descriptionHeader}
            description={post.description}
            link={post.link}
          />
        );
      })}
    </div>
  );
}

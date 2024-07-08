import useTranslation from "hooks/useTranslation";
import styles from "./BlogPostsGallery.module.scss";
import mainPostsData from "assets/mainPostsData";
import PostsGalleryItem from "components/PostsGallery/PostsGalleryItem/PostsGalleryItem";

export default function BlogPostsGallery() {
  const [translation] = useTranslation();

  return (
    <div className={styles.blogPostsGalleryContainer}>
      {translation.pages.posts.map((post, index) => {
        return (
          <PostsGalleryItem
            key={index}
            miniature={mainPostsData[index]?.miniature}
            descriptionHeader={post.descriptionHeader}
            description={post.description}
            link={mainPostsData[index]!.link}
          />
        );
      })}
    </div>
  );
}

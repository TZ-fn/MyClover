import { useState } from "react";
import useTranslation from "hooks/useTranslation";
import PostsGalleryItem from "./PostsGalleryItem/PostsGalleryItem";
import styles from "./PostsGallery.module.scss";
import postMiniatures from "../../assets/postsMiniatures";

export default function PostsGallery() {
  const [activePage, setActivePage] = useState(1);
  const [translation] = useTranslation();

  function handleGalleryControls(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    return setActivePage(Number((e.target as HTMLButtonElement).id));
  }

  return (
    <div className={styles.postsGalleryContainer}>
      <ul className={styles.postsGallery}>
        {/* {translation.pages.posts.map((post) => {
          return (
            <PostsGalleryItem
              miniature={postMiniatures[0]}
              descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
              description={translation.pages.posts[0]?.description}
            />
          );
        })} */}
        <PostsGalleryItem
          miniature={postMiniatures[0]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[1]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[2]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[3]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[4]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[5]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[6]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
        <PostsGalleryItem
          miniature={postMiniatures[7]}
          descriptionHeader={translation.pages.posts[0]?.descriptionHeader}
          description={translation.pages.posts[0]?.description}
        />
      </ul>
      <div className={styles.postsGalleryPagination}>
        <button onClick={(e) => handleGalleryControls(e)} id="1" className={activePage === 1 ? styles.active : ""}>
          1
        </button>
        <button onClick={(e) => handleGalleryControls(e)} id="2" className={activePage === 2 ? styles.active : ""}>
          2
        </button>
        <button onClick={(e) => handleGalleryControls(e)} id="3" className={activePage === 3 ? styles.active : ""}>
          3
        </button>
      </div>
    </div>
  );
}

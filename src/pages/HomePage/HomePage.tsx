import { ScrollRestoration } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import HeroBanner from "components/HeroBanner/HeroBanner";
import AboutSection from "components/AboutSection/AboutSection";
import CloverTextBanner from "components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "components/PostsGallery/PostsGallery";
import mainPostsData from "../../assets/mainPostsData";
import ImageBanner from "components/ImageBanner/ImageBanner";

function HomePage() {
  const [translation] = useTranslation();

  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery postsTranslation={translation.pages.posts} postsData={mainPostsData} />
      <ImageBanner />
      <ScrollRestoration />
    </>
  );
}

export default HomePage;

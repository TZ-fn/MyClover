import { ScrollRestoration } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import HeroBanner from "components/HeroBanner/HeroBanner";
import AboutSection from "components/AboutSection/AboutSection";
import CloverTextBanner from "components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "components/PostsGallery/PostsGallery";
import PageTitle from "components/PageTitle/PageTitle";
import ImageBanner from "components/ImageBanner/ImageBanner";

function HomePage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title="Home" />
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery postsData={translation.pages.postsMiniatures} />
      <ImageBanner />
      <ScrollRestoration />
    </>
  );
}

export default HomePage;

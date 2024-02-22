import HeroBanner from "components/HeroBanner/HeroBanner";
import AboutSection from "components/AboutSection/AboutSection";
import CloverTextBanner from "components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "components/PostsGallery/PostsGallery";
import ImageBanner from "components/BottomImage/ImageBanner";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery />
      <ImageBanner />
    </>
  );
}

export default HomePage;

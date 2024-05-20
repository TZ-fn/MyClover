import HeroBanner from "components/HeroBanner/HeroBanner";
import AboutSection from "components/AboutSection/AboutSection";
import CloverTextBanner from "components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "components/PostsGallery/PostsGallery";
import ImageBanner from "components/ImageBanner/ImageBanner";
import { ScrollRestoration } from "react-router-dom";

function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery />
      <ImageBanner />
      <ScrollRestoration />
    </>
  );
}

export default HomePage;

import Header from "components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AboutSection from "./components/AboutSection/AboutSection";
import CloverTextBanner from "./components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "./components/PostsGallery/PostsGallery";
import Footer from "./components/Footer/Footer";
import ImageBanner from "./components/BottomImage/ImageBanner";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery />
      <ImageBanner />
      <Footer />
    </>
  );
}

export default App;

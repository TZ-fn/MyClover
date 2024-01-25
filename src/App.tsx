import Header from "components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import PostsGallery from "./components/PostsGallery/PostsGallery";
import CloverTextBanner from "./components/CloverTextBanner/CloverTextBanner";
import AboutSection from "./components/AboutSection/AboutSection";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <AboutSection />
      <CloverTextBanner />
      <PostsGallery />
      <Footer />
    </>
  );
}

export default App;

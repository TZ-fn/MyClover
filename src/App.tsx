import Header from "components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AboutSection from "./components/AboutSection/AboutSection";
import CloverTextBanner from "./components/CloverTextBanner/CloverTextBanner";
import PostsGallery from "./components/PostsGallery/PostsGallery";
import Footer from "./components/Footer/Footer";

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

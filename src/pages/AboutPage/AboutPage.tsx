import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import aboutUsBg from "assets/aboutUsBg.webp";

function AboutPage() {
  const [translation] = useTranslation();
  return (
    <>
      <ImageHeader pageName={translation.header.navigation.about} backgroundImage={aboutUsBg} />
    </>
  );
}

export default AboutPage;

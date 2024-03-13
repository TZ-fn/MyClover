import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import aboutUsBg from "assets/aboutUsBg.webp";
import ImageDivider from "components/ImageDivider/ImageDivider";

function AboutPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.header.navigation.about} backgroundImage={aboutUsBg} />
      <ImageDivider isUpwards={false} />
    </>
  );
}

export default AboutPage;

import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import ImageDivider from "components/ImageDivider/ImageDivider";
import TextBanner from "components/TextBanner/TextBanner";
import Services from "components/AboutSection/Services/Services";

function AboutPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.header.navigation.about} backgroundImage="src/assets/aboutUsBg.webp" />
      <ImageDivider isUpwards={false} />
      <TextBanner
        header={translation.pages.aboutUs.sectionOne.header}
        mainText={translation.pages.aboutUs.sectionOne.text}
      />
      <Services />
    </>
  );
}

export default AboutPage;

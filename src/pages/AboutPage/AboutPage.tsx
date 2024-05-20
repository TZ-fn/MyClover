import useTranslation from "hooks/useTranslation";
import ImageHeader from "components/ImageHeader/ImageHeader";
import TextBanner from "components/TextBanner/TextBanner";
import OffersList from "components/AboutSection/OffersList/OffersList";
import FAQ from "components/FAQ/FAQ";
import ImageDivider from "components/ImageDivider/ImageDivider";
import CooperationBanner from "components/CooperationBanner/CooperationBanner";

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
      <OffersList />
      <FAQ />
      <ImageDivider isUpwards />
      <CooperationBanner />
    </>
  );
}

export default AboutPage;

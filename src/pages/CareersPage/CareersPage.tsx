import CareersPageMain from "components/CareersPageMain/CareersPageMain";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import careersBg from "assets/careers.webp";

function CareersPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.careers.title} backgroundImage={careersBg} />
      <ImageDivider isUpwards={false} />
      <CareersPageMain />
    </>
  );
}

export default CareersPage;

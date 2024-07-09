import CareersPageMain from "components/CareersPageMain/CareersPageMain";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import careersBg from "assets/careers.webp";

function CareersPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.careers.title} />
      <ImageHeader pageName={translation.pages.careers.title} backgroundImage={careersBg} />
      <ImageDivider isUpwards={false} />
      <CareersPageMain />
    </>
  );
}

export default CareersPage;

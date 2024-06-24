import CareersPageMain from "components/CareersPageMain/CareersPageMain";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";

function CareersPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.careers.title} backgroundImage="src/assets/careers.webp" />
      <ImageDivider isUpwards={false} />
      <CareersPageMain />
    </>
  );
}

export default CareersPage;

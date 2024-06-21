import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";

function CareersPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.careers.mainHeader} backgroundImage="src/assets/careers.webp" />
      <ImageDivider isUpwards={false} />
    </>
  );
}

export default CareersPage;

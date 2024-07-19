import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import TrustContent from "components/TrustContent/TrustContent";
import holiday from "assets/holiday.webp";

function TrustPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.trust.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.trust.mainHeader} backgroundImage={holiday} />
      <ImageDivider isUpwards={false} />
      <TrustContent />
    </>
  );
}

export default TrustPage;

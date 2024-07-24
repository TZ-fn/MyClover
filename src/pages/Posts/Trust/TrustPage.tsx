import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import TrustContent from "components/TrustContent/TrustContent";
import trust from "assets/postsBackgrounds/trust.webp";

function TrustPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.trust.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.trust.mainHeader} backgroundImage={trust} />
      <ImageDivider isUpwards={false} />
      <TrustContent />
    </>
  );
}

export default TrustPage;

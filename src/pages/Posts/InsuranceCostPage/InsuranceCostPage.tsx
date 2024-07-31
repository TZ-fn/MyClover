import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import InsuranceCostMain from "components/InsuranceCostMain/InsuranceCostMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import insuranceCost from "assets/postsBackgrounds/insuranceCost.jpg";

function InsuranceCostPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.insuranceCosts.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.insuranceCosts.mainHeader} backgroundImage={insuranceCost} />
      <ImageDivider isUpwards={false} />
      <InsuranceCostMain />
    </>
  );
}

export default InsuranceCostPage;

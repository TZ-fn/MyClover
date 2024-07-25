import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import BusinessInsuranceMain from "components/BusinessInsuranceMain/BusinessInsuranceMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import businessInsurance from "assets/postsBackgrounds/businessInsurance.webp";

function BusinessInsurancePage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.businessInsurance.mainHeader} />
      <ImageHeader
        pageName={translation.pages.postsData.businessInsurance.mainHeader}
        backgroundImage={businessInsurance}
      />
      <ImageDivider isUpwards={false} />
      <BusinessInsuranceMain />
    </>
  );
}

export default BusinessInsurancePage;

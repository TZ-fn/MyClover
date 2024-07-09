import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import TermsConditionsInfo from "components/TermsConditionsInfo/TermsConditionsInfo";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import clover from "assets/clover.webp";

function TermsConditionsPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.termsConditions.mainHeader} />
      <ImageHeader pageName={translation.pages.termsConditions.mainHeader} backgroundImage={clover} />
      <ImageDivider isUpwards={false} />
      <TermsConditionsInfo />
    </>
  );
}

export default TermsConditionsPage;

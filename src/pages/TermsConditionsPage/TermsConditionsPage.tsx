import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import TermsConditionsInfo from "components/TermsConditionsInfo/TermsConditionsInfo";
import useTranslation from "hooks/useTranslation";

function TermsConditionsPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.termsConditions.mainHeader} backgroundImage="src/assets/clover.webp" />
      <ImageDivider isUpwards={false} />
      <TermsConditionsInfo />
    </>
  );
}

export default TermsConditionsPage;

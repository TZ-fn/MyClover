import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import MortgagesPageMain from "components/MortgagesPageMain/MortgagesPageMain";
import useTranslation from "hooks/useTranslation";
import mortgagesBg from "assets/mortgages.webp";

function MortgagesPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.mortgages.mainHeader} backgroundImage={mortgagesBg} />
      <ImageDivider isUpwards={false} />
      <MortgagesPageMain />
    </>
  );
}

export default MortgagesPage;

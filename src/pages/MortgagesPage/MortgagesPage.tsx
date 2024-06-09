import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";

function MortgagesPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.mortgages.mainHeader} backgroundImage="src/assets/mortgages.webp" />
      <ImageDivider isUpwards={false} />
    </>
  );
}

export default MortgagesPage;

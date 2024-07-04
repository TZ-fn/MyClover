import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import IncomeProtectionMain from "components/IncomeProtectionMain/IncomeProtectionMain";
import useTranslation from "hooks/useTranslation";

function IncomeProtectionPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader
        pageName={translation.pages.incomeProtection.mainHeader}
        backgroundImage="src/assets/incomeProtection.webp"
      />
      <ImageDivider isUpwards={false} />
      <IncomeProtectionMain />
    </>
  );
}

export default IncomeProtectionPage;

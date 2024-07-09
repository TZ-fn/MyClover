import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import IncomeProtectionMain from "components/IncomeProtectionMain/IncomeProtectionMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import incomeProtectionBg from "assets/incomeProtection.webp";

function IncomeProtectionPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.incomeProtection.mainHeader} />
      <ImageHeader pageName={translation.pages.incomeProtection.mainHeader} backgroundImage={incomeProtectionBg} />
      <ImageDivider isUpwards={false} />
      <IncomeProtectionMain />
    </>
  );
}

export default IncomeProtectionPage;

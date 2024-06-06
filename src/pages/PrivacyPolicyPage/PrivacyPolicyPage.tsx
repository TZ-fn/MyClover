import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import PrivacyPolicy from "components/PrivacyPolicy/PrivacyPolicy";
import useTranslation from "hooks/useTranslation";

function PrivacyPolicyPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.pages.privacyPolicy.mainHeader} backgroundImage="src/assets/clover.webp" />
      <ImageDivider isUpwards={false} />
      <PrivacyPolicy />
    </>
  );
}

export default PrivacyPolicyPage;

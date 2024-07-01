import CookiesInfo from "components/CookiesInfo/CookiesInfo";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";

function CookiesPage() {
  const [translation] = useTranslation();
  return (
    <>
      <ImageHeader pageName={translation.pages.cookies.title} backgroundImage="src/assets/clover.webp" />
      <ImageDivider isUpwards={false} />
      <CookiesInfo />
    </>
  );
}

export default CookiesPage;

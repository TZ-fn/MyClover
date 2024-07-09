import CookiesInfo from "components/CookiesInfo/CookiesInfo";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import clover from "assets/clover.webp";

function CookiesPage() {
  const [translation] = useTranslation();
  return (
    <>
      <PageTitle title={translation.pages.cookies.title} />
      <ImageHeader pageName={translation.pages.cookies.title} backgroundImage={clover} />
      <ImageDivider isUpwards={false} />
      <CookiesInfo />
    </>
  );
}

export default CookiesPage;

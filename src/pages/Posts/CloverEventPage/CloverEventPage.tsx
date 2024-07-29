import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import CloverEventMain from "components/CloverEventMain/CloverEventMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import cloverEvent from "assets/postsBackgrounds/cloverEvent.webp";

function CloverEventPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.cloverEvent.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.cloverEvent.mainHeader} backgroundImage={cloverEvent} />
      <ImageDivider isUpwards={false} />
      <CloverEventMain />
    </>
  );
}

export default CloverEventPage;

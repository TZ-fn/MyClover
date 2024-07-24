import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import LifeCoverMain from "components/LifeCoverMain/LifeCoverMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import lifeCover from "assets/lifeCover.webp";

function LifeCoverPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.lifeCover.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.lifeCover.mainHeader} backgroundImage={lifeCover} />
      <ImageDivider isUpwards={false} />
      <LifeCoverMain />
    </>
  );
}

export default LifeCoverPage;

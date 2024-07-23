import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import LifeCoverMain from "components/LifeCoverMain/LifeCoverMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import mortgagesBg from "assets/mortgages.webp";

function LifeCoverPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.lifeCover.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.lifeCover.mainHeader} backgroundImage={mortgagesBg} />
      <ImageDivider isUpwards={false} />
      <LifeCoverMain />
    </>
  );
}

export default LifeCoverPage;

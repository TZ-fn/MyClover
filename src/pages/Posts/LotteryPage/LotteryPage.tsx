import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import LotteryMain from "components/LotteryMain/LotteryMain";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import lottery from "assets/postsBackgrounds/lottery.webp";

function LotteryPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.lottery.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.lottery.mainHeader} backgroundImage={lottery} />
      <ImageDivider isUpwards={false} />
      <LotteryMain />
    </>
  );
}

export default LotteryPage;

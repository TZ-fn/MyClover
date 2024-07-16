import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import holiday from "assets/holiday.webp";
import HolidayContent from "components/Posts/HolidayContent/HolidayContent";

function HolidayPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.pages.postsData.holiday.mainHeader} />
      <ImageHeader pageName={translation.pages.postsData.holiday.mainHeader} backgroundImage={holiday} />
      <ImageDivider isUpwards={false} />
      <HolidayContent />
    </>
  );
}

export default HolidayPage;

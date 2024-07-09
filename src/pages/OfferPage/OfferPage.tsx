import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import OfferInfo from "components/OfferInfo/OfferInfo";
import OffersPosts from "components/OfferPosts/OffersPosts";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import offerBg from "assets/offer.webp";

function OfferPage() {
  const [translation] = useTranslation();
  return (
    <>
      <PageTitle title={translation.header.navigation.offer} />
      <ImageHeader pageName={translation.header.navigation.offer} backgroundImage={offerBg} />
      <ImageDivider isUpwards={false} />
      <OfferInfo />
      <OffersPosts />
    </>
  );
}

export default OfferPage;

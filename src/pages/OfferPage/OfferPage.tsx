import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import OfferInfo from "components/OfferInfo/OfferInfo";
import OffersPosts from "components/OfferPosts/OffersPosts";
import useTranslation from "hooks/useTranslation";

function OfferPage() {
  const [translation] = useTranslation();
  return (
    <>
      <ImageHeader pageName={translation.header.navigation.offer} backgroundImage="src/assets/offer.webp" />
      <ImageDivider isUpwards={false} />
      <OfferInfo />
      <OffersPosts />
    </>
  );
}

export default OfferPage;

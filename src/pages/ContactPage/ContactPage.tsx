import ContactPageMain from "components/ContactPageMain/ContactPageMain";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";
import PageTitle from "components/PageTitle/PageTitle";
import contactBg from "assets/contact.webp";

function ContactPage() {
  const [translation] = useTranslation();

  return (
    <>
      <PageTitle title={translation.header.navigation.contact} />
      <ImageHeader pageName={translation.header.navigation.contact} backgroundImage={contactBg} />
      <ImageDivider isUpwards={false} />
      <ContactPageMain />
    </>
  );
}

export default ContactPage;

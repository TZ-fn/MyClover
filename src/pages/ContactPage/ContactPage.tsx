import ContactPageMain from "components/ContactPageMain/ContactPageMain";
import ImageDivider from "components/ImageDivider/ImageDivider";
import ImageHeader from "components/ImageHeader/ImageHeader";
import useTranslation from "hooks/useTranslation";

function ContactPage() {
  const [translation] = useTranslation();

  return (
    <>
      <ImageHeader pageName={translation.header.navigation.contact} backgroundImage="src/assets/contact.webp" />
      <ImageDivider isUpwards={false} />
      <ContactPageMain />
    </>
  );
}

export default ContactPage;

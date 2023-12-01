import useTranslation from "~/hooks/useTranslation";
import { FaSquareFacebook, FaSquareTwitter, FaSquareEnvelope, FaPhone, FaRegEnvelope, FaHouse } from "react-icons/fa6";
import styles from "./Footer.module.scss";

function Footer() {
  const [translation] = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.innerWrapper}>
        <div className={styles.info}>
          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>Clover Social Media</h3>
            <ul className={styles.socialsList}>
              <li className={styles.sectionListItem}>
                <FaSquareFacebook />
              </li>
              <li className={styles.sectionListItem}>
                <FaSquareTwitter />
              </li>
              <li className={styles.sectionListItem}>
                <FaSquareEnvelope />
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>{translation.layout.footer.contactInformation}</h3>
            <ul className={styles.sectionList}>
              <li className={styles.sectionListItem}>
                <FaPhone />
                <a href="tel:+44 7858282317">+44 7858282317</a>
              </li>
              <li className={styles.sectionListItem}>
                <FaRegEnvelope />
                <a href="mailto:office@myclover.co.uk">office@myclover.co.uk</a>
              </li>

              <li className={styles.sectionListItem}>
                <FaHouse />
                {translation.layout.footer.country}
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>{translation.layout.footer.moreInformation}</h3>
            <ul className={styles.sectionList}>
              <li className={styles.sectionListItem}>
                <a href="/terms-conditions">{translation.layout.footer.termsConditions}</a>
              </li>
              <li className={styles.sectionListItem}>
                <a href="/privacy-policy">{translation.layout.footer.privacyPolicy}</a>
              </li>
              <li className={styles.sectionListItem}>
                <a href="/cookies">{translation.layout.footer.cookies}</a>
              </li>
              <li className={styles.sectionListItem}>
                <a href="/contact">{translation.layout.footer.contact}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.disclaimer}>
          <h3 className={styles.sectionHeader}>Clover - Family Cover</h3>
          <div className={styles.disclaimerText}>
            <p>
              Clover Family Cover Ltd (FCA 742293) is an Appointed Representative of Polish Brokers Ltd, which is
              authorised and regulated by the Financial Conduct Authority No. 841246.
            </p>
            <p>
              Clover Family Cover Ltd is registered in England and Wales with company number 11455465. Registered
              Address 56 Cardinal Place, Southampton, SO16 4HN.
            </p>
            <p>
              Clover Family Cover Ltd is entered on the Financial Services Register http://register.fca.org.uk/ under
              reference 742293.
            </p>
            <p>
              The Financial Ombudsman Service (FOS) is an agency for arbitrating on unresolved complaints between
              regulated firms and their clients. Full details of the FOS can be found on its website at
              www.financial-ombudsman.org.uk <br />
              As a mortgage is secured against your home, your home may be repossessed if you do not keep up repayments
              on your mortgage or any other debt secured on it.
            </p>
            <p>
              If you wish to register a complaint, please write to our Compliance Officer - Polish Brokers Ltd, 32B
              Aztec Centre, Aztec West, Bristol BS32 4TD or contact by phone on 0145 420 3300.
            </p>
            <p>
              A summary of our internal complaints handling procedures for the reasonable and prompt handling of
              complaints is available on request and if you cannot settle your complaint with us, you may be entitled to
              refer it to the Financial Ombudsman Service at www.financial-ombudsman.org.uk or by contacting them on
              0800 023 4 567.
            </p>
          </div>
        </div>
        <div className={styles.rights}>
          © Copyright 2023 {currentYear !== 2023 ? `- ${currentYear}` : ""} | Clover - Family Cover |{" "}
          {translation.layout.footer.bottomBar.rights}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { FaSquareFacebook, FaSquareTwitter, FaSquareEnvelope, FaPhone, FaRegEnvelope, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useTranslation from "hooks/useTranslation";
import styles from "./Footer.module.scss";

function Footer() {
  const [translation] = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.innerWrapper}>
        <div className={styles.info}>
          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>{translation.footer.contactInformation}</h3>
            <ul className={styles.sectionList}>
              <li className={styles.sectionListItem}>
                <FaPhone />
                <Link to="tel:+44 7858282317">+44 7858282317</Link>
              </li>
              <li className={styles.sectionListItem}>
                <FaRegEnvelope />
                <Link to="mailto:office@myclover.co.uk">office@myclover.co.uk</Link>
              </li>

              <li className={styles.sectionListItem}>
                <FaHouse />
                {translation.footer.country}
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>{translation.footer.cloverSocials}</h3>
            <ul className={styles.socialsList}>
              <li className={styles.sectionListItem}>
                <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/cloverfamilycover/">
                  <FaSquareFacebook />
                  <span className="visually-hidden">{translation.footer.socialsFacebookLink}</span>
                </Link>
              </li>
              <li className={styles.sectionListItem}>
                <Link>
                  <FaSquareTwitter />
                  <span className="visually-hidden">{translation.footer.socialsTwitterLink}</span>
                </Link>
              </li>
              <li className={styles.sectionListItem}>
                <Link to="mailto:office@myclover.co.uk">
                  <FaSquareEnvelope />
                  <span className="visually-hidden">{translation.footer.socialsEmail}</span>
                </Link>
              </li>
            </ul>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/cloverfamilycover/"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <blockquote cite="https://www.facebook.com/cloverfamilycover/" className="fb-xfbml-parse-ignore">
                <Link target="_blank" rel="noopener noreferrer" to="https://www.facebook.com/cloverfamilycover/">
                  Clover - Family Cover
                </Link>
              </blockquote>
            </div>
          </div>

          <div className={styles.links}>
            <h3 className={styles.sectionHeader}>{translation.footer.moreInformation}</h3>
            <ul className={styles.sectionList}>
              <li className={styles.sectionListItem}>
                <Link to="/terms-conditions">{translation.footer.termsConditions}</Link>
              </li>
              <li className={styles.sectionListItem}>
                <Link to="/privacy-policy">{translation.footer.privacyPolicy}</Link>
              </li>
              <li className={styles.sectionListItem}>
                <Link to="/cookies">{translation.footer.cookies}</Link>
              </li>
              <li className={styles.sectionListItem}>
                <Link to="/contact">{translation.footer.contact}</Link>
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
              As Link mortgage is secured against your home, your home may be repossessed if you do not keep up
              repayments on your mortgage or any other debt secured on it.
            </p>
            <p>
              If you wish to register Link complaint, please write to our Compliance Officer - Polish Brokers Ltd, 32B
              Aztec Centre, Aztec West, Bristol BS32 4TD or contact by phone on 0145 420 3300.
            </p>
            <p>
              Link summary of our internal complaints handling procedures for the reasonable and prompt handling of
              complaints is available on request and if you cannot settle your complaint with us, you may be entitled to
              refer it to the Financial Ombudsman Service at www.financial-ombudsman.org.uk or by contacting them on
              0800 023 4 567.
            </p>
          </div>
        </div>
        <div className={styles.rights}>
          © Copyright 2023 {currentYear !== 2023 ? `- ${currentYear}` : ""} | Clover - Family Cover |{" "}
          {translation.footer.bottomBar.rights}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

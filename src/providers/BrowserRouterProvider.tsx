import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import OfferPage from "pages/OfferPage/OfferPage";
import BlogPage from "pages/BlogPage/BlogPage";
import ContactPage from "pages/ContactPage/ContactPage";
import TermsConditionsPage from "pages/TermsConditionsPage/TermsConditionsPage";
import PrivacyPolicyPage from "pages/PrivacyPolicyPage/PrivacyPolicyPage";
import CookiesPage from "pages/CookiesPage/CookiesPage";
import MortgagesPage from "pages/MortgagesPage/MortgagesPage";
import CareersPage from "pages/CareersPage/CareersPage";
import IncomeProtectionPage from "pages/IncomeProtectionPage/IncomeProtectionPage";
import NoMatch from "pages/NoMatch/NoMatch";
import HolidayPage from "pages/Posts/HolidayPage/HolidayPage";
import TrustPage from "pages/Posts/Trust/TrustPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/offer",
        element: <OfferPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditionsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/cookies",
        element: <CookiesPage />,
      },
      {
        path: "/offer/mortgages",
        element: <MortgagesPage />,
      },
      {
        path: "/offer/careers",
        element: <CareersPage />,
      },
      {
        path: "/offer/income-protection",
        element: <IncomeProtectionPage />,
      },
      {
        path: "/blog/before-going-on-holiday",
        element: <HolidayPage />,
      },
      {
        path: "/blog/about-trust",
        element: <TrustPage />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;

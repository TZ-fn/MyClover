import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import AboutPage from "pages/AboutPage/AboutPage";
import OfferPage from "pages/OfferPage/OfferPage";
import BlogPage from "pages/BlogPage/BlogPage";
import ContactPage from "pages/ContactPage/ContactPage";
import NoMatch from "pages/NoMatch/NoMatch";

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
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;

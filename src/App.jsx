import { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import Merchandise2 from "./pages/Merchandise2";
import Team from "./components/Teams/Team";
import About from "./pages/About";
import EventZone from "./pages/Events/Zone/EventsZone";
import EventList from "./pages/Events/ZoneEventList/ZoneEventList";
import PurchaseListPage from "./pages/PurcahseListPage";
import EventDetails from "./pages/Events/EventDescription/EventDetails";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import { Register } from "./pages/Register";
import { PackSelectionPage } from "./pages/PackSelectionPage";
import Profile from "./pages/Profile";
import BgVideo from "./components/BgVideo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { RegisterTheEvents } from "./pages/Events/EventRegistration/RegisterTheEvents";
import TermsAndConditions from "./pages/TermsAndConditions";
import ReturnsAndRefundsPolicy from "./pages/ReturnsAndRefundsPolicy";
import PackagePage from "./pages/Accomodation/Package";
import Accomodation from "./pages/Accomodation/form";

function App() {
  const [load, setLoader] = useState(true);
  const router = createHashRouter([
    {
      path: "/",
      element: <Landing load={load} />,
    },
    {
      path: "/preloader",
      element: <BgVideo setLoader={setLoader} />,
    },
    {
      path: "merchant",
      element: <Merchandise />,
    },
    {
      path: "merchant/offer",
      element: <Merchandise2 />,
    },
    {
      path: "event",
      element: <EventZone />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "/accomodation/:type",
      element: <Accomodation />,
    },
    {
      path: "packages/:msg",
      element: <PackagePage />,
    },
    {
      path: "packages/",
      element: <PackagePage />,
    },
    {
      path: "/event/:category",
      element: <EventList />,
    },
    {
      path: "/event/:category/:name",
      element: <EventDetails />,
    },
    {
      path: "/event/:category/:eventId/register",
      element: <RegisterTheEvents />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "admin",
      element: <PurchaseListPage />,
    },
    {
      path: "packselection",
      element: <PackSelectionPage />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "/event-register/:id",
      element: <RegisterTheEvents />,
    },
    {
      path: "privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "terms-and-conditions",
      element: <TermsAndConditions />,
    },
    {
      path: "returns-and-refunds-policy",
      element: <ReturnsAndRefundsPolicy />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;




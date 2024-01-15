import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import Team from "./components/Teams/Team";
import About from "./pages/About";
import Frm from "./components/Profile/form";
// import { Profile } from "./pages/Profile";
import PurchaseListPage from "./pages/PurcahseListPage";
import EventDetails from "./pages/EventDetails";
import Event from "./pages/Event";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { EventRegister } from "./pages/EventRegister";
import Login from "./components/Login";
import { Register } from "./pages/Register";
import { PackSelectionPage } from "./pages/PackSelectionPage";
import Merchandise2 from "./pages/Merchandise2";
import Profile from "./pages/Profile";
import BgVideo from "./components/BgVideo";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ReturnsAndRefundsPolicy from "./pages/ReturnsAndRefundsPolicy";

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
      path: "event",
      element: <Event />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "/event/event-details/:id",
      element: <EventDetails />,
    },
    // {
    //   path: "/profile",
    //   element: <Frm />,
    // },
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
      path: "/event/event-details/eventRegister/:id",
      element: <EventRegister />,
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

// ReactDOM.createRoot(document.getElementById("root")).render(

// );

{
  /* <>
        <Routes path="/">
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/merchant" element={<Merchandise />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/profile" element={<Frm />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/admin" element={<PurchaseListPage />} />
        </Routes>
      </> */
}

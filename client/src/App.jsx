import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import Team from "./components/Teams/Team";
import About from "./pages/About";
import Frm from "./components/Profile/form";
import Profile from "./components/Profile/profile";
import PurchaseListPage from "./pages/PurcahseListPage";
import EventDetails from "./pages/EventDetails";
import Event from "./pages/Event";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function App() {
  // const path = useLocation();
  // React.useEffect(() => {
  //   scroll.scrollToTop({ duration: 1000 });
  // }, [path.pathname]);
  const router = createHashRouter([
    {
      path: "/",
      element: <Landing />,
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
      path: "/event/event-details/:id",
      element: <EventDetails />,
    },
    {
      path: "profile",
      element: <Frm />,
    },
    {
      path: "team",
      element: <Team />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "admin",
      element: <PurchaseListPage />,
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

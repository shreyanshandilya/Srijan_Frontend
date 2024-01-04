import "./App.css";
import Landing from "./pages/Landing";
import Merchandise from "./pages/Merchandise";
import Team from "./components/Teams/Team";
import About from "./pages/About";
import Frm from "./components/Profile/form";
import Profile from "./components/Profile/profile";
import PurchaseListPage from "./pages/PurcahseListPage";
import Event from "./pages/Event";
import {
  Form,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import Landing from './pages/Landing';

function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
    return(
      <HashRouter exact basename="/">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/merchant" element={<Merchandise />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/profile" element={<Frm />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/admin" element={<PurchaseListPage />} />
        </Routes>
      </HashRouter>
    )
  //   )
  // );
  // return <RouterProvider router={router} />;
}

export default App;

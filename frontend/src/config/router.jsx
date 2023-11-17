import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import AuthChecker from "../utils/AuthChecker";
import Gaurdian from "../screens/Gaurdian";
// import Gaurdian from "../screens/Gaurdian";
// import GaurdianHome from "../screens/Gaurdian/GaurdianHome";
// import GaurdianVerify from "../screens/Gaurdian/GaurdianVerify";
import Treetag from "../screens/User/Treetag";
import Leaderboard from "../screens/User/Leaderboard";
import Event from "../screens/User/Event";
import Homepage from "../screens/User/Homepage";
import AdminEvents from "../screens/Admin/pages/admin_events";
import Dash from "../screens/Admin/pages/dashboard";
import UserNavbar from "../components/UserNavbar";
import AdminNavbar from "../components/AdminNavbar";
import TreeFinderNavbar from "../components/TreeFinderNavbar";
import Verify from "../screens/Admin/pages/verify";
import EventSpecific from "../screens/User/EventSpecific";
import Tree from "../screens/Admin/pages/Treemappers";
import Host from "../screens/User/HostEvent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthChecker />,
    children: [
      {
        path: "/",
        element: <UserNavbar />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/event",
            children: [
              { path: "/event/:eventID", element: <EventSpecific /> },
              { path: "/event", element: <Event /> },
              { path: "/event/host", element: <Host /> },
            ],
          },
          {
            path: "/treetag",
            element: <Treetag />,
          },
          {
            path: "/Home",
            element: <Homepage />,
          },
          {
            path: "/leaderboard",
            element: <Leaderboard />,
          },
        ],
      },
      {
        path: "/admin",
        element: <AdminNavbar />,
        children: [
          { path: "/admin/event", element: <AdminEvents /> },
          { path: "/admin/dash", element: <Dash /> },
          { path: "/admin/verify", element: <Verify /> },
          { path: "/admin/treemappers", element: <Tree /> },
        ],
      },
      {
        path: "/gaurdian",
        element: <TreeFinderNavbar />,
        children: [{ path: "/gaurdian", element: <Gaurdian /> }],
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;

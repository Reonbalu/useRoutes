import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
  Outlet,
  useNavigate,
  NavLink
} from "react-router-dom";

const Component1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Component1</h1>
      <button onClick={() => navigate("/dashboard")}>Component2</button>
    </>
  );
};

const Component2 = () => {
  return (
    <h1>
      Component2
      <Outlet />
    </h1>
  );
};

const Component3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Component3</h1>
      <button onClick={() => navigate("/dashboard/user")}>User</button>
    </>
  );
};

const User = () => {
  return <h1>User</h1>;
};

const PageReplace = () => {
  return (
    <>
      <h1>PageReplace</h1>
      <NavLink to="/dashboard/app">Component2</NavLink>
    </>
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Component1 /> },
    {
      path: "dashboard",
      element: <Component2 />,
      children: [
        { path: "", element: <Navigate to="/PageReplace" replace /> },
        { path: "app", element: <Component3 /> },
        { path: "user", element: <User /> }
      ]
    },
    { path: "pageReplace", element: <PageReplace /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
export default AppWrapper;

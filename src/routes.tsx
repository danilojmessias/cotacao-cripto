import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";
import { Error404 } from "./pages/error";
import { Layout } from "./components/layout";
import { Nocoin } from "./pages/error/nocoin";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/nocoin", element: <Nocoin /> },
      { path: "/detail/:cripto", element: <Detail /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);
export { router };

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createHashRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Angebot from "./page/unser-angebot/index";
import Highlight from "./page/unser-angebot/banner2";
import Products from "./page/unser-angebot/banner4";
import Banner from "./page/unser-angebot/banner";
import OurFood from "./page/unser-angebot/Banner3";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element:<Angebot></Angebot>
      },
      {
        path: "home",
        element: <Angebot></Angebot>,
      },
      {
        path: "our-food",
        element: (
          <>
            <Highlight></Highlight>
            <Products></Products>
          </>
        ),
      },
      {
        path: "why-smartfoodie",
        element: <OurFood></OurFood>,
      },
      {
        path: "contact",
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();

import React from "react";
import withLoader from "../hocs/withLoader";
import About from "../pages/About";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import ProductAdd from "../pages/Product add";
import ROUTES_PATHS from "./paths";

const HomeWithLoader = withLoader(Home);

const ROUTES = [
  {
    path: ROUTES_PATHS.HOME,
    element: <HomeWithLoader />,
  },
  {
    path: ROUTES_PATHS.BASKET,
    element: <Basket />,
  },
  {
    path: ROUTES_PATHS.PRODUCT_ADD,
    element: <ProductAdd />,
  },
  {
    path: ROUTES_PATHS.PRODUCT_INFO,
    element: <About />,
  },
  {
    path: ROUTES_PATHS.PRODUCTS,
    element: <Home />,
  },
];

export default ROUTES;

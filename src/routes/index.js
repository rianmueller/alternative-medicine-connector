import React from "react";
import { Route } from "react-router-dom";
import WaitingRoom from "../components/WaitingRoom";
import Homepage from "../containers/Homepage";
import Articles from "../containers/Articles";
import Product from '../components/Product';

export const routes = [
  {
    path: "/chat",
    exact: true,
    component: WaitingRoom
  },
  { path: "/articles",
   exact: true, 
   component: Articles },
  {
    path: "/",
    exact: true,
    component: Homepage
  },
  {path: '/product',
exact: true,
component: Product}
];

const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={`global_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};
export default Routes;

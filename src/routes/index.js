import React from "react";
import { Route } from "react-router-dom";
import WaitingRoom from "../components/WaitingRoom";
import Articles from '../containers/Articles'
import Studies from '../containers/Studies'

export const routes = [
  {
    path: "/chat",
    exact: true,
    component: WaitingRoom
  },
  {
    path: '/articles',
    exact:true,
    component: Articles
  },
  {
    path: '/studies',
    exact: true,
    component: Studies
  }
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

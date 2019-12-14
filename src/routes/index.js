import React from "react";
import { Route } from "react-router-dom";
import WaitingRoom from "../components/WaitingRoom";
import Articles from '../containers/Articles'

export const routes = [
  {
    path: "/waitingroom",
    exact: true,
    component: WaitingRoom
  },
  {
    path: '/articles',
    exact:true,
    component: Articles
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

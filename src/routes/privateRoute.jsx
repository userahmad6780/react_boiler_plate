import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component, layout: Layout, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const WrappedComponent = Layout ? Layout(Component) : Component;

  return <WrappedComponent {...rest} />;
};

export default PrivateRoute;

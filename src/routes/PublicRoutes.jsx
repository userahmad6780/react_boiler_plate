import React from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ component: Component, layout: Layout, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const WrappedComponent = Layout ? Layout(Component) : Component;

  return <WrappedComponent {...rest} />;
};

export default PublicRoute;
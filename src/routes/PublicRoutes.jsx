import React from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ component: Component, layout: Layout, isAuthenticated, path, ...rest }) => {
  if (isAuthenticated && path != '*') {
    console.log('home---------------------------------')
    return <Navigate to="/" />;
  }
  
  // here giving component as a prop to layout coponent
  const ComponentWithLayout = Layout ? Layout(Component) : Component;

  return <ComponentWithLayout {...rest} />;
};

export default PublicRoute;
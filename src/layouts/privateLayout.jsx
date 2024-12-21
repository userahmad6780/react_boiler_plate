import React from 'react'

function privateLayout(WrappedComponent) {
  return (props) => {
    console.log("Private Props:", props);
    return <WrappedComponent {...props} />;
  };
}

export default privateLayout
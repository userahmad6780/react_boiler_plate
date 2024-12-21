import React from 'react'

function publicLayout(WrappedComponent) {
    return (props) => {
        console.log("Public Props:", props);
        return <WrappedComponent {...props} />;
    };
}

export default publicLayout
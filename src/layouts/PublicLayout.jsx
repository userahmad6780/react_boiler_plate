import React from 'react'

function PublicLayout(WrappedComponent) {
    return (props) => {
        console.log("Public Props:", props);
        return <WrappedComponent {...props} />;
    };
}

export default PublicLayout
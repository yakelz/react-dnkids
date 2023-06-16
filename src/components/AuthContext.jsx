import React from 'react';

const AuthContext = React.createContext({
    isAuth: false,
    setAuth: () => {},
    isParent: false,
    setParent: () => {},
    Header: true,
    setHeader: () => {}
});

export default AuthContext;

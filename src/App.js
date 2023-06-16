import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './App.css';
import 'typeface-nunito';
import Layout from "./components/Layout/Layout";

import {parentRoutes, childRoutes, publicRoutes, courseRoutes} from "./components/Router/routes";
import AuthContext from './components/AuthContext';
import {match} from "path-to-regexp";

const App = () => {
    const [isAuth, setAuth] = useState(true);
    const [isParent, setParent] = useState(true);
    const [Header, setHeader] = useState(true);

    const location = useLocation();
    const [headerTitle, setHeaderTitle] = useState('');


    const routes = [
        ...publicRoutes,
        ...courseRoutes,
        ...parentRoutes.map(route => ({ ...route, path: `/parent/${route.path}` })),
        ...childRoutes.map(route => ({ ...route, path: `/child/${route.path}` })),
    ];


    useEffect(() => {
        let matchedRoute;
        for (let route of routes) {
            const matchPath = match(route.path, { decode: decodeURIComponent });
            if (matchPath(location.pathname)) {
                matchedRoute = route;
                break;
            }
        }
        if (matchedRoute) {
            setHeaderTitle(matchedRoute.title);
        }
    }, [location.pathname]);

    return (
        <AuthContext.Provider value={{ isAuth, setAuth, isParent, setParent, Header, setHeader }}>
            <Routes>
                {isAuth ? (
                    <>
                        {isParent ? (
                            <Route path={"/parent"} element={<Layout headerTitle={headerTitle} />}>
                                {parentRoutes.map(({ path, element }) => (
                                    <Route key={path} path={path} element={element} />
                                ))}
                            </Route>
                        ) : (
                            <Route path={"/child"} element={<Layout headerTitle={headerTitle} />}>
                                {childRoutes.map(({ path, element }) => (
                                    <Route key={path} path={path} element={element} />
                                ))}
                            </Route>
                        )}
                        <Route path={"/course"} element={<Layout headerTitle={headerTitle} />}>
                            {courseRoutes.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Route>
                        <Route path="*" element={<Navigate to={isParent ? "/parent/bank" : "/child/bank"} />} />
                    </>
                ) : (
                    <>
                        {publicRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;

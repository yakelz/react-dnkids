import React from 'react';
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Layout = ({ headerTitle }) => {
    return (
        <div className="wrapper">
            <Header>{headerTitle}</Header>
            <Outlet />
            <Navbar/>
        </div>
    );
};

export default Layout;
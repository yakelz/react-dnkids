import React, {useContext} from 'react'
import './Header.css';
import {ReactComponent as MainLogo} from '../../../assets/svg/logo-small.svg';
import {ReactComponent as LeftArrow} from '../../../assets/svg/left_arrow.svg';
import AuthContext from "../../AuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const Header = ({children}) => {
    const {Header: isDefaultHeader} = useContext(AuthContext);
    const headerClass = isDefaultHeader ? 'header-default' : 'header-transparent';
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const location = useLocation();

    return (
        <header className={headerClass}>
            {
                isDefaultHeader ? (
                    <>
                        <MainLogo/>
                        <h2>{children}</h2>
                    </>
                ) : (
                    <>
                        <LeftArrow
                            onClick={() => goBack()}
                            className="header__icon-arrow"
                        />
                        <h3
                            style={ location.pathname.startsWith('/course') ? {color: 'transparent'} : {} }
                        >
                            {children}</h3>
                    </>)
            }
        </header>
    )
};

export default Header;
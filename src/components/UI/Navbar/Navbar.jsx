import React, {useContext} from 'react'
import './Navbar.css';
import {NavLink} from "react-router-dom";

import {ReactComponent as BankIco} from '../../../assets/svg/bank.svg';
import {ReactComponent as CourseIco} from '../../../assets/svg/course.svg';
import {ReactComponent as TasksIco} from '../../../assets/svg/tasks.svg';
import {ReactComponent as ProfileIco} from '../../../assets/svg/profile.svg';

import AuthContext from "../../AuthContext";

const Navbar = () => {
    const {isParent} = useContext(AuthContext);
    return (
        <nav className='navbar'>
            <NavLink to={isParent ? "/parent/bank" : "/child/bank"} className='navbar__btn'><BankIco/></NavLink>
            <NavLink to={isParent ? "/course" : "/course"} className='navbar__btn'><CourseIco/></NavLink>
            <NavLink to={isParent ? "/parent/tasks" : "/child/tasks"} className='navbar__btn'><TasksIco/></NavLink>
            <NavLink to={isParent ? "/parent/profile" : "/child/profile"}
                     className='navbar__btn'><ProfileIco/></NavLink>
        </nav>
    )
};

export default Navbar;
import React from 'react';
import classes from "./Button.module.css";

const Button = ({ children, outline, ...props}) => {
    return (
        <button
            className={`
            ${classes.myButton}
            ${ outline ? classes.outline + " headerInfo-label" : classes.default + " button-label"}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
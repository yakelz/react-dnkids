import React from 'react'
import classes from './IcoButton.module.css';

const IcoButton = ({ onClick, children, Icon}) => {
    return (
        <button
            className={` ${classes.icoBtn} ${classes.dashed}`}
            onClick= {onClick}
        >
            <Icon />
            <span className={`button-label ${classes.buttonText}`}>{children}</span>
        </button>
    )
};

export default IcoButton;
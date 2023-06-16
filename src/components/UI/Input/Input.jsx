import React from 'react';
import classes from "./Input.module.css";

const Input = ({ ...props }) => {
    return (
        <div className={ classes.inputWrapper }>
            <label
                className={`${classes.inputLabel} input-label`}
                htmlFor={props.name}
            >
                {props.label}
            </label>
            <input
                className={`${classes.myInput} inputText-label`}
                type="text"
                id={props.name}
                name={props.name}
                {...props}
            />
        </div>
    );
};

export default Input;
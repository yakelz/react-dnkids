import React from 'react'
import classes from './Select.module.css';

const Select = () => {
    return (
        <select className={`${classes.dropdown} input-label`}>
            <option> По дате создания </option>
            <option> Максим Голяк </option>
            <option> Леонид Голяк </option>
            <option> Полина Голяк </option>
        </select>
    )
};

export default Select;
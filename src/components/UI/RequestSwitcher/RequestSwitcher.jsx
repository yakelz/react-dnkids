import React, { useState } from 'react';
import classes from './RequestSwitcher.module.css'

const RequestSwitcher = ({isActive, setIsActive}) => {
    return (
        <div className={ classes.RequestSwitcher }>
            <label
                onClick={() => setIsActive(true)}
                className= {classes.requestLabel}
            >
                Активные
            </label>
            <label
                onClick={() => setIsActive(false)}
                className= {classes.requestLabel}
            >
                Все задания
            </label>
            <div className= {classes.slider} style={{ left: isActive ? '0' : '50%' }}>
                <div className={classes.sliderInner}></div>
            </div>
        </div>
    );
};

export default RequestSwitcher;
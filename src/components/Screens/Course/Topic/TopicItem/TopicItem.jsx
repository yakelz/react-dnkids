import React from 'react';
import classes from "./TopicItem.module.css";
const TopicItem = ({ progress, children }) => {

    const progressBarStyle = {
        width: `${progress}%`,
    };
    return (
        <div className={classes.progressBackground}>
            <div style={progressBarStyle} className={classes.progressBar} >
            </div>
            <div className={classes.itemChildren}>
                {children}
            </div>
        </div>
    );
};

export default TopicItem;
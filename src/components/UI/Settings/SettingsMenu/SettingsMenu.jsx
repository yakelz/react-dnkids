import React from 'react';

import classes from './SettingsMenu.module.css'

const SettingsMenu = ( {children, ...props} ) => {
    return (
        <div
            className={classes.settingsMenu}
            {...props}
        >
            { children }
        </div>
    );
};

export default SettingsMenu;
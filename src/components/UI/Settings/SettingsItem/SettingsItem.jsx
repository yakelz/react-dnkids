import React from 'react';
import {ReactComponent as RightArrow} from '../../../../assets/svg/right_arrow.svg';
import classes from './SettingsItem.module.css'

const SettingsItem = ( {Icon, iconStyle, OptionName, ...props} ) => {
    return (
        <div className={`${classes.settingsItem} ${props.disabled ? classes.disabledItem : ''}`}
             {...props}
        >
            {Icon ? <Icon className={iconStyle}/> : null}
            <span>{ OptionName }</span>
            <div style={{flexGrow: 1}}></div>
            <RightArrow/>
        </div>
    );
};

export default SettingsItem;
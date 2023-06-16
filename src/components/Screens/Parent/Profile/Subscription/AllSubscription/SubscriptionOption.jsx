import React from 'react';
import classes from './SubscriptionOption.module.css';

const SubscriptionOption = ({ sub }) => {
    return (
        <div className={sub.current ? `${classes.subOption} ${classes.currentSub}` : classes.subOption}>
            <div>
                <p className="headerInfo-label">{sub.title}</p>
                {sub.current ? <p className="info-label" style={{color: "#A4A4A4"}}>Текущая подписка</p> :
                    (sub.benefit ? <p className="info-label">1 месяц – {sub.perMonth}</p> : null)}
            </div>
            <div className={classes.optionPrice}>
                <p className="headerInfo-label">{sub.price}</p>
                {sub.current ? null :
                    (sub.benefit ? <p className={`${classes.optionBenefits} info-label`}>Выгода – {sub.benefit}</p> : null)}
            </div>
        </div>
    );
};

export default SubscriptionOption;

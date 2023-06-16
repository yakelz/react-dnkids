import React from 'react';
import classes from './SubscriptionList.module.css'
import SubscriptionOption from "./SubscriptionOption";

const SubscriptionList = ({subscriptions}) => {

    return (
        <div className={ classes.subscriptionsList}>
            {
                subscriptions.map((sub) =>
                    <SubscriptionOption key={sub.title} sub={sub} />
                )
            }
        </div>
    );
};

export default SubscriptionList;
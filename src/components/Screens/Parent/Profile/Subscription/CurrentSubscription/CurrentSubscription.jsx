import React from 'react';
import classes from './CurrentSubscription.module.css'
import subImage from '../../../../../../assets/img/Subscription/current_sub.png'
import noSub from '../../../../../../assets/img/Subscription/nosubscription.png'


const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
];

const CurrentSubscription = ( {sub} ) => {

    const day = sub.duration?.getDate();
    const month = sub.duration?.getMonth();
    const year = sub.duration?.getFullYear();

    const duration = `${day} ${months[month-1]} ${year} года`;

    return (
        <div className={ classes.currentSubscription }>
            <img src={sub.status ? subImage : noSub} alt="Subscription image"/>
            <div className={classes.subInfo}>
                {sub.status ?
                    <span className={ classes.subStatusSuccess + " info-label" }>Активная</span>
                    :
                    <span className={ classes.subStatusExpired + " info-label" }>Истекла</span>
                }
                <span className="button-label">{ sub.title }</span>
                <span className={ classes.subPrice + " inputText-label" }> { sub.price } </span>
                {sub.status ?
                    <span className={ classes.subDuration }>Истекает: {duration} </span>
                    : null
                }
            </div>
        </div>
    );
};

export default CurrentSubscription;
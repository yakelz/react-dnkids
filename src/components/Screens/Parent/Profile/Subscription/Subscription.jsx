import React, {useContext, useEffect} from 'react';
import AuthContext from '../../../../AuthContext';
import CurrentSubscription from "./CurrentSubscription/CurrentSubscription";
import SubscriptionList from "./AllSubscription/SubscriptionList";
import {subscriptions} from "../../../../data";

const Subscription = () => {
    const {setHeader} = useContext(AuthContext);
    useEffect(() => {
        setHeader(false);
        return () => {
            setHeader(true);
        }
    }, []);

    const currentSubscription = subscriptions.find(sub => sub.current === true);

    let sub = { title: "DNKids – Free" };
    if (currentSubscription) {
        const { title, price } = currentSubscription;
        sub = { status: true, title, price, duration: new Date(2022, 2, 22) };
    }
    return (
        <main>
            <h4>Ваша подписка</h4>
            <CurrentSubscription sub={sub}/>
            <h4>Варианты</h4>
            <SubscriptionList subscriptions ={subscriptions}/>
        </main>
    );
};

export default Subscription;
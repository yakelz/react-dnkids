import React,{useState} from 'react';
import classes from "./TotalBalance.module.css";
import {ReactComponent as ArrowDown} from '../../../../../assets/svg/arrow_down.svg';
import { motion } from 'framer-motion';
import SettingsMenu from "../../../../UI/Settings/SettingsMenu/SettingsMenu";
import SettingsItem from "../../../../UI/Settings/SettingsItem/SettingsItem";

import {ReactComponent as Rubles} from "../../../../../assets/svg/ruble.svg";
import {ReactComponent as Euro} from "../../../../../assets/svg/euro.svg";
import {ReactComponent as Dollar} from "../../../../../assets/svg/dollar.svg";

import {childrenBalance, exchangeRates} from "../../../../data";


const TotalBalance = () => {
    const [currency, setCurrency] = useState({code: 'RUB', name: 'в рублях', symbol: '₽', rate: 1});
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { opacity: 1, height: "auto" },
        closed: { opacity: 0, height: 0 }
    };

    const totalBalance = childrenBalance.reduce((total, child) => total + child.balance, 0);
    const convertedBalance = totalBalance * currency.rate;

    return (
        <>
            <div className={classes.totalBalance}>
                <div className={classes.title}>
                    <span>Общий баланс <strong onClick={() => setIsOpen(!isOpen)}>{currency.name}</strong></span>
                    <ArrowDown onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <div className={classes.balance}>
                    {convertedBalance} {currency.symbol}
                </div>
            </div>
            <motion.div
                className={classes.currencyChoice}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{ damping: 10 }}
            >
                <SettingsMenu className={classes.currencyChoice} >
                    <SettingsItem
                        Icon= {Rubles}
                        iconStyle={classes.iconStyle}
                        OptionName= {"В рублях (RUB)"}
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setCurrency({code: 'RUB', ...exchangeRates['RUB']});
                        }}
                    />
                    <SettingsItem
                        Icon= {Euro}
                        iconStyle={classes.iconStyle}
                        OptionName= {"В евро (EUR)"}
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setCurrency({code: 'EUR', ...exchangeRates['EUR']});
                        }}
                    />
                    <SettingsItem
                        Icon= {Dollar}
                        iconStyle={classes.iconStyle}
                        OptionName= {"В долларах (USD)"}
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setCurrency({code: 'USD', ...exchangeRates['USD']});
                        }}
                    />
                </SettingsMenu>
            </motion.div>
        </>
    );
};

export default TotalBalance;
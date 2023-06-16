import React, {useState} from 'react'
import classes from './ChildBalance.module.css';
import {childrenBalance} from "../../../../data";

const ChildBalance = ({child, setChildBalanceModal}) => {
    const childBalance = childrenBalance.find(kid => kid.id === Number(child.id))
    return (
        <>
            <div className={classes.childCard} onClick={() =>{
                //setChildBalanceModal(true);
            }}>
                <img src={`/img/child_photo${child.id}.jpg`} alt="Child Photo"/>
                <div className={classes.text}>
                    <span className='button-label'> {child.name + " " + child.surname} </span>
                </div>
                <div className={classes.balance}>
                    <span> {childBalance.balance} ₽ </span>
                    <span className='info-label' style={{color:"var(--success-color)"}}> +7,66$  за неделю </span>
                </div>
            </div>
        </>
    )
};

export default ChildBalance;
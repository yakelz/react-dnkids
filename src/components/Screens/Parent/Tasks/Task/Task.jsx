import React, {useState} from 'react'
import classes from './Task.module.css';

const Task = ({task, setTaskModal}) => {
    return (
        <>
            <div className={classes.task} onClick={() =>{
                setTaskModal(true);
            }}>
                <img src="/img/child_photo1.jpg" alt="child image"/>
                <div className={classes.text}>
                    <span className='input-label'> {task.taskName} </span>
                    <span className='info-label'> {task.deadline} </span>
                </div>
                <div className={classes.price}>
                    <span> {task.price} </span>
                </div>
            </div>
        </>
    )
};

export default Task;
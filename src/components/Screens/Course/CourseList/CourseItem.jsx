import React from 'react';
import classes from './CourseItem.module.css'
import {useNavigate} from "react-router-dom";

function getLessonWordForm(num) {
    let txt;
    num = Math.abs(num) % 100;
    let rest = num % 10;

    if (num > 10 && num < 20) {
        txt = 'уроков';
    } else if (rest > 1 && rest < 5) {
        txt = 'урока';
    } else if (rest == 1) {
        txt = 'урок';
    } else {
        txt = 'уроков';
    }

    return txt;
}

const CourseItem = ({course}) => {
    const navigate = useNavigate();

    return (
        <div className={classes.courseItem}
             onClick ={() => {
                 navigate('/course/' + course.id);
             }}
        >
            <div className={classes.coursePercent}>
                <img src={course.image} alt="Course Image"/>
                <span>{course.progress}%</span>
            </div>
            <div className={`
                ${classes.courseProgress}
                ${course.progress > 80 ?
                    classes.progressGreen
                    :
                    course.progress > 40 ? classes.progressOrange : classes.progressGray}
            `}>
                <span className="input-label"> {course.id + ". " + course.title}</span>
                <span
                    className="info-label">{course.lessonsAmount + " " + getLessonWordForm(course.lessonsAmount)}</span>
            </div>
        </div>
    );
};

export default CourseItem;
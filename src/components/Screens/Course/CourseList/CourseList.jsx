import React from 'react';
import CourseItem from "./CourseItem";
import classes from './CourseList.module.css'


const CourseList = ( {courses} ) => {
    return (
        <div className={classes.courseList}>
            {
                courses.map((course) =>
                    <CourseItem key={course.id} course={course}/>
                )
            }
        </div>
    );
};

export default CourseList;
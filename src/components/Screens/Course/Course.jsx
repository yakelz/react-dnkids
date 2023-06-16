import React from 'react';
import CourseList from "./CourseList/CourseList";
import CourseItem from "./CourseList/CourseItem";

import {courses} from "../../data";

const Course = () => {

    return (
        <main>
            <h4>Последние</h4>
            <CourseItem
                course={courses[2]}
            />
            <h4>Все темы</h4>
            <CourseList courses={courses}/>
        </main>
    );
};

export default Course;
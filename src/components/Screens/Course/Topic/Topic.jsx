import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from "../../../AuthContext";
import courseImage2 from '../../../../assets/img/Course/3.png'

import classes from './Topic.module.css'
import TopicList from "./TopicList/TopicList";

const Topic = () => {
    const {setHeader} = useContext(AuthContext);
    useEffect(() => {
        setHeader(false);
        return () => {
            setHeader(true);
        }
    }, []);

    const { topicId, lessonId } = useParams();
    return (
        <main className={ classes.topicMain}>
            <div className={ classes.topicTitle }>
                <img src={courseImage2} alt="Course Image"/>
                <h2>Основы финансов: что такое деньги, и как они работают?</h2>
            </div>
            <div className={ classes.content }>
                <p className={ classes.topicInfo }>Управление личными финансами и составление бюджета — это важные навыки, которые помогают вести стабильный и сбалансированный образ жизни.</p>
                <TopicList/>
            </div>
        </main>
    );
};

export default Topic;
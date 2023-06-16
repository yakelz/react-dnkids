import React from 'react';
import classes from './TopicList.module.css'
import TopicItem from "../TopicItem/TopicItem";

const TopicList = () => {
    return (
        <div className={classes.topicList}>
            <TopicItem progress={80}>
                <p className="info-label">Урок №1</p>
                <p className="input-label">Бюджетирование:
                    Как составить свой личный бюджет
                    и управлять финансами?</p>
            </TopicItem>
            <TopicItem progress={40}>
                <p className="info-label">Урок №2</p>
                <p className="input-label">Финансовая ответственность:
                    Как правильно распоряжаться деньгами,
                    чтобы не попасть в долги?</p>
            </TopicItem>
            <TopicItem progress={0}>
                <p className="info-label">Урок №3</p>
                <p className="input-label">Как применять знания о финансах
                    в реальной жизни?</p>
            </TopicItem>
        </div>
    );
};

export default TopicList;
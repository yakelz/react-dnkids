import React from 'react';
import classes from './ChildCard.module.css'
import {ReactComponent as Icon} from '../../../../../assets/svg/edit.svg';
import {useNavigate} from "react-router-dom";


const ChildCard = ({child}) => {
    const navigate = useNavigate();
    return (
        <div className={ classes.childCard }>
            <img src={`/img/child_photo${child.id}.jpg`} alt="Child Photo"/>
            <span className="headerInfo-label" >{child.name + " " + child.surname}</span>
            <div style={{flexGrow: 1}}></div>
            <Icon
                onClick ={() => {
                    navigate('/parent/profile/edit/child/' + child.id)
                }}
            />
        </div>
    );
};

export default ChildCard;
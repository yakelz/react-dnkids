import React from 'react';
import ChildCard from "../EditChildCard/ChildCard";
import classes from './ChildList.module.css'

const ChildList = ({children}) => {
    return (
        <div className={ classes.childList }>
            {children.map((child) => (
                <ChildCard key={child.id} child={child} />
            ))}
        </div>
    );
};

export default ChildList;
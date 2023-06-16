import React, {useState} from 'react'
import Select from '../../../UI/Select/Select';
import IcoButton from '../../../UI/Buttons/IcoButton';
import TaskList from './TaskList/TaskList';
import AddNewTaskModal from './AddNewTaskModal/AddNewTaskModal';
import RequestSwitcher from "../../../UI/RequestSwitcher/RequestSwitcher";

import {ReactComponent as AddIco} from '../../../../assets/svg/add.svg';
import {completedTasks, currentTasks} from "../../../data";

const ParentTasks = () => {
    const [addModalActive, setAddModalActive] = useState(false);
    const [activeTasks, setActiveTasks] = useState(currentTasks);
    const [allTasks, setAllTasks] = useState(completedTasks);
    const [isActive, setIsActive] = useState(true);

    const addTask = (newTask) => {
        setActiveTasks([...activeTasks, newTask]);
        console.log(activeTasks);
    }

    return (
        <main>
            <span className='button-label'>Всего заданий: {isActive ? activeTasks.length : allTasks.length} </span>
            <RequestSwitcher isActive={isActive} setIsActive={setIsActive}></RequestSwitcher>
            <Select/>
            {isActive ? (
                <>
                    <TaskList tasks={activeTasks} />
                    <IcoButton onClick={() => setAddModalActive(true)} Icon={AddIco}>
                        Добавить задание
                    </IcoButton>
                    <AddNewTaskModal tasks={activeTasks} addTask={addTask} modalActive={addModalActive} setModalActive={setAddModalActive} />
                </>
            ) : (
                <TaskList tasks={allTasks} />
            )}
        </main>
    )
};

export default ParentTasks;

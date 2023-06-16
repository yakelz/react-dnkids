import React, {useState} from 'react';
import Task from "../Task/Task";
import Modal from "../../../../UI/Modal/Modal";
import Button from "../../../../UI/Buttons/Button";

const TaskList = ({tasks}) => {
    const [taskModal, setTaskModal] = useState(false);
    return (
        <>
            <div>
                {tasks.map((task) =>
                    <Task
                        task = {task}
                        setTaskModal = {setTaskModal}
                        key = { task.id }
                    />
                )}
            </div>
            <Modal active={taskModal} setModalActive={setTaskModal}>
                <h2>Изменить задание</h2>
                <form>

                    <Button
                    >
                        Создать
                    </Button>
                </form>
            </Modal>
        </>

    );
};

export default TaskList;
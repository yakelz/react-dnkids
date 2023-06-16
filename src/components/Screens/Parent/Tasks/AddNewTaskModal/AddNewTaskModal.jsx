import React, { useState } from 'react'
import Modal from '../../../../UI/Modal/Modal';
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Buttons/Button";

const AddNewTaskModal = ( {tasks, addTask, modalActive, setModalActive}) => {
    const [task, setTask] = useState({
        taskName: '',
        deadline:'',
        child: '',
        price: ''
    });

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: tasks.length + 1,
            ...task,
        }
        addTask(newTask);
        setTask({
            taskName: '',
            deadline:'',
            child: '',
            price: ''}
        )
        setModalActive(false);
    }
  return (
      <Modal active={modalActive} setModalActive={setModalActive}>
        <h2>Добавить задание</h2>
          <form>
              <Input
                  value={task.taskName}
                  onChange={e => setTask({...task, taskName: e.target.value})}
                  label="Задание"
                  name="task"
                  placeholder="Введите задание"
              />
              <Input
                  value={task.deadline}
                  onChange={e => setTask({...task, deadline: e.target.value})}
                  label="Срок выполнения"
                  name="deadline"
                  placeholder="Введите срок"
              />
              <Input
                  value={task.child}
                  onChange={e => setTask({...task, child: e.target.value})}
                  label="Для кого"
                  name="child"
                  placeholder="Введите имя"
              />
              <Input
                  value={task.price}
                  onChange={e => setTask({...task, price: e.target.value})}
                  label="Цена задания"
                  name="price"
                  placeholder="Введите цену"
              />
              <Button
                  onClick = { addNewTask }
              >
                  Создать
              </Button>
          </form>
      </Modal>
  )
};

export default AddNewTaskModal;
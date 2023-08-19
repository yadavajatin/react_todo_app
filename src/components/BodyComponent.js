import AddTaskComponent from './AddTaskComponent.js';
import HeaderComponent from './HeaderComponent.js';
import TasksListComponent from './TasksListComponent.js';
import {nanoid} from 'nanoid'
import {useEffect, useState} from "react"

const BodyComponent = () => {
    const [tasksList, setTasksList] = useState([])
    const [toggleButton, setToggleButton] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const [currentTaskId, setCurrentTaskId] = useState(null)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("react-todo-list-app-data"))
        if (savedTasks) {
            setTasksList(savedTasks)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("react-todo-list-app-data", JSON.stringify(tasksList))
    }, [tasksList]);


    const addTaskFunction = (inputValue) => {
        if (inputValue && !toggleButton) {
            setTasksList(
                tasksList.map((task) => {
                    if (task.id === currentTaskId) {
                        return {...task, value: inputValue}
                    }
                    return task
                })
            )
            setInputValue("")
            setToggleButton(true)
        } else {
            const newTask = {
                id: nanoid(),
                value: inputValue,
                isChecked: false,
            }
            const newArrForSavingTask = [...tasksList, newTask]
            setTasksList(newArrForSavingTask)
            setInputValue("")

        }
    }
    const deleteTaskFunction = (id) => {
        const arrayAfterTaskDeleted = tasksList.filter((task) => task.id !== id)
        setTasksList(arrayAfterTaskDeleted)
    }

    const editTaskFunction = (id) => {
        let itemToBeEdited = tasksList.find((task) => task.id === id)
        setInputValue(itemToBeEdited.value)
        setToggleButton(false)
        setCurrentTaskId(id)
    }

    const checkBoxFunction = (id) => {
        const newTaskListAfterChecking = tasksList.map((task) => {
            if (task.id === id) {
                return {...task, isChecked: !task.isChecked}
            }else{
                return task
            }
        })
        setTasksList(newTaskListAfterChecking)
    }

    return (
        <>
            <div className="container">
                <HeaderComponent/>
                <AddTaskComponent
                    addTaskFunction={addTaskFunction}
                    toggleButton={toggleButton}
                    inputValue={inputValue}
                    setInputValue={setInputValue}

                />
                <TasksListComponent
                    checked={checked}
                    checkBoxFunction={checkBoxFunction}
                    tasksList={tasksList}
                    deleteTaskFunction={deleteTaskFunction}
                    editTaskFunction={editTaskFunction}

                />
            </div>
        </>
    )
}

export default BodyComponent
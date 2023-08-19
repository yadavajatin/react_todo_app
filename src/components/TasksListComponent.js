import {useState} from "react"
import TaskComponent from './TaskComponent'
import {nanoid} from 'nanoid'

const TasksListComponent = ({tasksList, deleteTaskFunction, editTaskFunction, checked, checkBoxFunction}) => {



    return(
        <>
            <div className="taskListContainer">
                {tasksList.map((task, index) => {
                    return (<TaskComponent
                        id={task.id}
                        value={task.value}
                        key={task.id}
                        isChecked={task.isChecked}
                        deleteTaskFunction={deleteTaskFunction}
                        editTaskFunction={editTaskFunction}
                        checked={checked}
                        checkBoxFunction={checkBoxFunction}
                    />)
                })}
            </div>
        </>
    )
}

export default TasksListComponent
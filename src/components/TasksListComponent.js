import {useState} from "react"
import TaskComponent from './TaskComponent'
import {nanoid} from 'nanoid'

const TasksListComponent = ({tasksList, deleteTaskFunction, editTaskFunction}) => {



    return(
        <>
            <div className="taskListContainer">
                {tasksList.map((task, index) => {
                    return (<TaskComponent
                        id={task.id}
                        value={task.value}
                        key={task.id}
                        deleteTaskFunction={deleteTaskFunction}
                        editTaskFunction={editTaskFunction}
                    />)
                })}
            </div>
        </>
    )
}

export default TasksListComponent
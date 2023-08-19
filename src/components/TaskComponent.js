import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskComponent = ({id, value, deleteTaskFunction, editTaskFunction, checkBoxFunction, isChecked}) => {
    const deleteTask = () => {
        deleteTaskFunction(id);
    }

    const editTask = () => {
        editTaskFunction(id)
        console.log(id)
    }

    const checkBoxIdFunction = () => {
        checkBoxFunction(id)
    }
    return (
        <>
            <div className="taskContainer">
                <div className="task__btnInput">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={isChecked}
                        onChange={checkBoxIdFunction}

                    />
                    <label className="task__text">{value}</label>
                </div>
                <div className="task__deleteEdit">
                    <EditIcon
                        className="task__button"
                        onClick={editTask}
                    />
                    <DeleteIcon
                        className="task__button delete"
                        onClick={deleteTask}
                    />
                </div>
            </div>

        </>
    )
}

export default TaskComponent
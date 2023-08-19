import {useState} from "react"

const AddTaskComponent = ({addTaskFunction, toggleButton, setInputValue, inputValue}) => {
    const settingInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const addTask = () => {
        if(inputValue.trim().length > 0) {
            addTaskFunction(inputValue)
        }

    }



    return (
        <>
            <div className="addTask">
                <input
                    type="text"
                    className="addTaskInput"
                    placeholder="type you task for today"
                    value={inputValue}
                    onChange={settingInputValue}
                />
                {toggleButton ? (
                <button
                    className="addTaskButton"
                    onClick={addTask}
                >Add Task
                </button>
                ):(
                <button
                    className="addTaskButton"
                    onClick={addTask}
                >Edit Task
                </button>
                )}
            </div>


        </>
    )
}

export default AddTaskComponent
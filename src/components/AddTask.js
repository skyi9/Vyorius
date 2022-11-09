import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action-creators/action'

const AddTask = () => {

    const [task, setTask] = useState({
        task: "",
    })
    const onChange = (e) => {
        const {
            name, value
        } = e.target
        setTask({ ...task, [name]: value })
    }

    const dispatch = useDispatch()

    function AddTask() {
        dispatch(addTask(task))
    }

    return (
        <>
            <div className='d-grid gap-3'>
                <h1>Add Your Task here -</h1>
                <div className="mb-3">
                    <input onChange={onChange} value={task.task} name='task' type="text" className="form-control" id="task" placeholder="I will code @6" />
                </div>
                <div>
                    <button onClick={AddTask} type="button" className="btn btn-primary">Add Task</button>
                </div>
            </div>
        </>
    )
}

export default AddTask

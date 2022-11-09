import React, { useState, useEffect, useRef } from 'react'
import AddTask from './AddTask'
import { fetchTasks, deletData } from '../redux/action-creators/action'
import { useDispatch, useSelector } from 'react-redux';

const Task = () => {
    const dispatch = useDispatch()
    const notdata = useSelector(state => state?.task?.notesData)
    const deletedData = useSelector(state => state?.task?.deletedData)
    console.log(deletedData);
    console.log(notdata);
    const [noteData, setNoteData] = useState([])
    useEffect(() => {
        setNoteData()
    }, [])
    useEffect(() => {
        const dataCall = async () => {
            dispatch(fetchTasks())
        }
        dataCall();
    }, [])
    useEffect(() => {
        setNoteData(notdata)
    }, [notdata])

    const delet = (id) => {
        const newDataa = noteData?.filter((data, index) => index === id)
        dispatch(deletData(newDataa?.[0]))
        dispatch(fetchTasks())
        if (deletedData === true) {

        }
    }


    return (
        <div className='container mt-5 '>
            <AddTask />

            <h1 className='mt-4'>Your Tasks -</h1>
            <div className='mt-4'>
                {
                    noteData?.map((event, index) => {
                        return (
                            <div className='d-flex'>
                                <div className="card" style={{ width: '18rem' }}>
                                    <div key={index} className="card-body">
                                        <h5 className="card-title">{event.task}</h5>
                                        <div className='d-flex float-end'>
                                            <i className="fa-solid fa-pen-to-square me-3"></i>
                                            <i onClick={() => delet(index)} className="fa-solid fa-trash"></i>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div >
    )
}

export default Task

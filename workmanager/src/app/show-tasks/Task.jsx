import UserContext from '@/context/UserContext'
import React, { useContext } from 'react'
import { ImCross } from "react-icons/im";

const Task = ({ task, deleteTaskParent }) => {
    const { user } = useContext(UserContext);
    function deleteTask(taskId) {
        deleteTaskParent(taskId)
    }
    return (
        <div className={`shadow-black shadow-lg mt-5 rounded-lg ${task.status == "completed" ? "bg-green-800" : "bg-gray-800"}`}>
            <div className='p-2'>
                <div className="flex justify-between">
                    <h1 className='text-white text-2xl font-semibold'>{task.title}</h1>
                    <span onClick={()=>{deleteTask(task._id)}} className='bg-slate-700 hover:bg-slate-600 p-2 rounded-full'><ImCross className='text-white cursor-pointer' /></span>
                </div>
                <p className='text-white'>{task.content}</p>
                <div className="flex justify-between mt-3">
                    <p className='text-white font-bold text-left'>Status: {task.status}</p>
                    <p className='text-white font-bold text-right'>Author: {user?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Task
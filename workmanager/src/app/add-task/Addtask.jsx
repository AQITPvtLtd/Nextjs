"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { addTask } from '@/services/taskService';
import {toast} from 'react-toastify'


const Addtask = () => {
    const [task, setTask] = useState({
        title: '',
        content: '',
        status: 'none',
        //temporary solution
        userId: '6797677a7a974ed52ba2cc48'
    });

    const handleAddTask = async (event)=>{
        event.preventDefault();
        console.log(task);

        try {
            const result = await addTask(task);
            console.log(result);
            toast.success("Your task is added!!", {
                position: "top-center",
            });

            setTask({
                title: '',
                content: '',
                status: 'none',
                userId: '6797677a7a974ed52ba2cc48'
            });
        } catch (error) {
          console.log(error); 
          toast.error("Task not added!!", {
            position: "top-center",
          }) 
        }

    }
    return (
        <div>
            <div className='grid grid-cols-12 mt-4 justify-center'>
                <div className='shadow-gray-500 text-white shadow-lg p-5 col-span-4 col-start-5 bg-black rounded-lg'>
                    <div className='flex justify-center mb-3'>
                        <Image src="/logo.svg" width={350} height={100} alt='img-alt' />
                    </div>
                    <h1 className='text-3xl text-center'>Add your task here</h1>
                    <form action="" onSubmit={handleAddTask}>
                        {/* task title */}

                        <div className='mt-4'>
                            <label htmlFor="task_title" className='block font-medium text-sm mb-2'>Title</label>
                            <input type="text" name='task-title' onChange={(event) => { setTask({ ...task, title: event.target.value, }) }} value={task.title} className='rounded-full w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' id='task_title' />
                        </div>

                        {/* task content */}

                        <div className='mt-4'>
                            <label htmlFor="task_content" className='block font-medium text-sm mb-2'>Content</label>
                            <textarea name='task-content' onChange={(event) => { setTask({ ...task, content: event.target.value, }) }} value={task.content} className='w-full rounded-lg p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' id='task_content' rows={5} />
                        </div>

                        {/* task status */}

                        <div className='mt-4'>
                            <label htmlFor="task_status" className='block font-medium text-sm mb-2'>Status</label>
                            <select name='task-status' onChange={(event) => { setTask({ ...task, status: event.target.value, }) }} value={task.status} id="task_status" className='w-full rounded-lg p-3 text-white bg-slate-500 focus:ring-red-400 border border-white'>
                                <option value="none" disabled>---Select Status---</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* button action */}
                        <div className='mt-4 flex justify-center'>
                            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Task</button>
                            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3'>Clear</button>
                        </div>
                        
                        {/* { JSON.stringify(task) } */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addtask
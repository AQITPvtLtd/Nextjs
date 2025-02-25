"use client";

import React from 'react'
import Link from 'next/link';

const CustomNavbar = () => {
    return (
        <nav className='bg-blue-600 p-4 flex justify-between text-white items-center'>
            <div className='brand'>
                <h1 className='text-2xl font-bold'><a href="">Work Manager</a></h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    <li>
                        <Link href={'/'} className='hover:text-blue-200'>Home</Link>
                    </li>
                    <li>
                        <Link href={'/add-task'} className='hover:text-blue-200'>Add Task</Link>
                    </li>
                    <li>
                        <Link href={'/show-tasks'} className='hover:text-blue-200'>Show Tasks</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-3'>
                    <li><a href="">Login</a></li>
                    <li><Link href="/signup">Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavbar
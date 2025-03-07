"use client";

import React, { useContext } from 'react'
import Link from 'next/link';
import UserContext from '@/context/UserContext';
import { logout } from '@/services/userService';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CustomNavbar = () => {

    const context = useContext(UserContext)
    //console.log(context);
    const router = useRouter()

    async function doLogout() {
        try {
            const result = await logout()
            console.log(result);
            context.setUser(undefined);
            router.push("/")
        } catch (error) {
            console.log(error);
            toast.error("Logout Error")
        }
    }
    return (
        <nav className='bg-blue-600 p-4 flex justify-between text-white items-center'>
            <div className='brand'>
                <h1 className='text-2xl font-bold'><a href="">Task Manager</a></h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    {
                        context.user && (
                            <>
                                <li>
                                    <Link href={'/'} className='hover:text-blue-200'>Home</Link>
                                </li>
                                <li>
                                    <Link href={'/add-task'} className='hover:text-blue-200'>Add Task</Link>
                                </li>
                                <li>
                                    <Link href={'/show-tasks'} className='hover:text-blue-200'>Show Tasks</Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div>
                <ul className='flex space-x-3'>
                    {
                        context.user && (
                            <>
                                <li><Link href={"#!"}>{context.user.name}</Link></li>
                                <li><button onClick={doLogout}>Logout</button></li>
                            </>
                        )
                    }

                    {
                        !context.user && (
                            <>
                                <li><Link href="/login">Login</Link></li>
                                <li><Link href="/signup">Signup</Link></li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavbar